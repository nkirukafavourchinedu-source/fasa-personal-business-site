import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import OpenAI from 'openai'
const app=express(); app.use(cors()); app.use(express.json())
const port=process.env.PORT||8787
const businessContext=`You are FASA AI Assistant for FASA Excel Global Enterprise and Ochiagha Nkiruka Favour. Only use information supplied in the website. Business categories: blocks, cement, building materials, provision store. Do not invent prices, addresses, phone numbers, qualifications, jobs, awards, testimonials, statistics, certifications or product specifications. If information is unavailable, say: Contact FASA Excel Global Enterprise for current details. Be concise and professional.`
app.post('/api/chat',async(req,res)=>{
 try{
  if(!process.env.OPENAI_API_KEY) return res.status(503).json({error:'AI mode is not configured. The website fallback assistant is available.'})
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
  const input=Array.isArray(req.body.messages)?req.body.messages:[]
  const response=await client.responses.create({model:process.env.OPENAI_MODEL||'gpt-5.6-luna',instructions:businessContext,input})
  res.json({reply:response.output_text})
 }catch(e){res.status(500).json({error:'The AI assistant is temporarily unavailable.'})}
})
app.listen(port,()=>console.log(`FASA API running on ${port}`))
