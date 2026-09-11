import { useState } from "react";

const LANGUAGES = [
  { code: "English", flag: "🇬🇧", label: "English" },
  { code: "Thai", flag: "🇹🇭", label: "ภาษาไทย" },
  { code: "Hindi", flag: "🇮🇳", label: "हिन्दी" },
  { code: "Bengali", flag: "🇧🇩", label: "বাংলা" },
  { code: "Spanish", flag: "🇪🇸", label: "Español" },
  { code: "French", flag: "🇫🇷", label: "Français" },
  { code: "Arabic", flag: "🇸🇦", label: "العربية" },
  { code: "Portuguese", flag: "🇧🇷", label: "Português" },
  { code: "Indonesian", flag: "🇮🇩", label: "Bahasa" },
  { code: "Japanese", flag: "🇯🇵", label: "日本語" },
  { code: "Korean", flag: "🇰🇷", label: "한국어" },
  { code: "Chinese", flag: "🇨🇳", label: "中文" },
  { code: "Russian", flag: "🇷🇺", label: "Русский" },
  { code: "German", flag: "🇩🇪", label: "Deutsch" },
  { code: "Swahili", flag: "🇰🇪", label: "Kiswahili" },
  { code: "Turkish", flag: "🇹🇷", label: "Türkçe" },
  { code: "Vietnamese", flag: "🇻🇳", label: "Tiếng Việt" },
  { code: "Malay", flag: "🇲🇾", label: "Bahasa Melayu" },
  { code: "Urdu", flag: "🇵🇰", label: "اردو" },
  { code: "Tagalog", flag: "🇵🇭", label: "Filipino" },
  { code: "Italian", flag: "🇮🇹", label: "Italiano" },
  { code: "Dutch", flag: "🇳🇱", label: "Nederlands" },
  { code: "Polish", flag: "🇵🇱", label: "Polski" },
  { code: "Greek", flag: "🇬🇷", label: "Ελληνικά" },
];

const industries = ["Restaurant / Food","Retail / Shop","Beauty / Salon","Fitness / Gym","Real Estate","Coaching / Consulting","Tech / SaaS","Healthcare","Education","Creative / Agency","Other"];
const services = ["Website Design","Social Media Management","SEO","Logo & Branding","Video / Reels","Photography","Copywriting","Ads / Marketing","App Development","E-commerce Setup"];

const DARK = {
  bg:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
  headerBg:"rgba(255,255,255,0.05)",headerBorder:"rgba(255,255,255,0.1)",
  cardBg:"rgba(255,255,255,0.05)",cardBorder:"rgba(255,255,255,0.1)",
  inputBg:"rgba(255,255,255,0.07)",inputBorder:"rgba(255,255,255,0.13)",
  text:"#fff",textSub:"rgba(255,255,255,0.45)",textMid:"rgba(255,255,255,0.75)",
  pillBorder:"rgba(255,255,255,0.13)",pillBg:"rgba(255,255,255,0.04)",pillText:"rgba(255,255,255,0.65)",
  tabBg:"rgba(255,255,255,0.04)",dropBg:"#1e1b3a",dropBorder:"rgba(255,255,255,0.15)",
  btnBorder:"rgba(255,255,255,0.15)",btnBg:"rgba(255,255,255,0.06)",
  accent:"#a78bfa",accentAlt:"#60a5fa",navBg:"rgba(15,12,41,0.95)",navBorder:"rgba(255,255,255,0.08)",
};
const LIGHT = {
  bg:"linear-gradient(135deg,#f0f4ff,#e8ecff,#f5f0ff)",
  headerBg:"rgba(255,255,255,0.9)",headerBorder:"rgba(167,139,250,0.2)",
  cardBg:"rgba(255,255,255,0.92)",cardBorder:"rgba(167,139,250,0.2)",
  inputBg:"#fff",inputBorder:"rgba(167,139,250,0.3)",
  text:"#1a1040",textSub:"#6b7280",textMid:"#374151",
  pillBorder:"rgba(167,139,250,0.25)",pillBg:"rgba(167,139,250,0.06)",pillText:"#4b5563",
  tabBg:"rgba(167,139,250,0.08)",dropBg:"#fff",dropBorder:"rgba(167,139,250,0.25)",
  btnBorder:"rgba(167,139,250,0.25)",btnBg:"rgba(167,139,250,0.07)",
  accent:"#7c3aed",accentAlt:"#2563eb",navBg:"rgba(240,244,255,0.97)",navBorder:"rgba(167,139,250,0.2)",
};


  const SCREENS = [
  {id:"dashboard",icon:"🏠",label:"Dashboard"},
  {id:"generate",icon:"⚡",label:"Generate"},
  {id:"history",icon:"📂",label:"History"},
  
  {id:"tracker",icon:"👥",label:"Tracker"},
  {id:"social",icon:"📱",label:"Social"},
  {id:"pricing",icon:"💰",label:"Pricing"},
  {id:"invoice",icon:"🧾",label:"Invoice"},
  {id:"proposal",icon:"📄",label:"Proposal"},
  {id:"followup",icon:"🔔",label:"Follow-up"},
  {id:"naming",icon:"✨",label:"Name AI"},
  {id:"competitor",icon:"🔍",label:"Compete"},
];

const statusColors = {"Not Contacted":"#6b7280","Contacted":"#2563eb","Interested":"#d97706","Proposal Sent":"#7c3aed","Won ✅":"#16a34a","Lost ❌":"#dc2626"};

export default function ClientFinderAI() {
  const [dark, setDark] = useState(true);
  const T = dark ? DARK : LIGHT;
  const [screen, setScreen] = useState("dashboard");
  const [showNav, setShowNav] = useState(false);
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState("English");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [form, setForm] = useState({name:"",company:"",phone:"",email:"",industry:"",budget:"",offering:[],notWanting:[],targetLocation:"",targetIndustry:"",goal:""});
  const [result, setResult] = useState(null);
  const [parsed, setParsed] = useState({whatsapp:[],emails:[]});
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(null);
  const [activeTab, setActiveTab] = useState("strategy");
  const [history, setHistory] = useState([]);
  const [viewingHistory, setViewingHistory] = useState(null);
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({name:"",company:"",contact:"",status:"Not Contacted",notes:""});
  const [showAddClient, setShowAddClient] = useState(false);
  const [socialForm, setSocialForm] = useState({business:"",niche:"",platform:"Instagram",goal:"Get more clients",tone:"Professional"});
  const [socialResult, setSocialResult] = useState(null);
  const [socialLoading, setSocialLoading] = useState(false);
  const [pricingForm, setPricingForm] = useState({service:"Website Design",hours:"10",experience:"Beginner",location:"Thailand",projectType:"One-time"});
  const [pricingResult, setPricingResult] = useState(null);
  const [pricingLoading, setPricingLoading] = useState(false);
  // Invoice
  const [invoiceForm, setInvoiceForm] = useState({yourName:"",yourEmail:"",clientName:"",clientEmail:"",service:"",amount:"",currency:"USD",dueDate:"",notes:""});
  const [invoiceResult, setInvoiceResult] = useState(null);
  const [invoiceLoading, setInvoiceLoading] = useState(false);
  // Proposal
  const [proposalForm, setProposalForm] = useState({yourName:"",company:"",clientName:"",clientBusiness:"",service:"",budget:"",timeline:"",problem:""});
  const [proposalResult, setProposalResult] = useState(null);
  const [proposalLoading, setProposalLoading] = useState(false);
  // Follow-up
  const [followups, setFollowups] = useState([]);
  const [newFollowup, setNewFollowup] = useState({clientName:"",company:"",contact:"",lastContacted:"",followupDate:"",reason:"Follow up on proposal",notes:""});
  const [showAddFollowup, setShowAddFollowup] = useState(false);
  const [followupMsg, setFollowupMsg] = useState(null);
  const [followupLoading, setFollowupLoading] = useState(false);
  const [selectedFollowup, setSelectedFollowup] = useState(null);
  // Naming
  const [namingForm, setNamingForm] = useState({industry:"",style:"Modern",keywords:"",location:""});
  const [namingResult, setNamingResult] = useState(null);
  const [namingLoading, setNamingLoading] = useState(false);
  // Competitor
  const [compForm, setCompForm] = useState({yourService:"",yourLocation:"",competitor:""});
  const [compResult, setCompResult] = useState(null);
  const [compLoading, setCompLoading] = useState(false);

  const selectedLang = LANGUAGES.find(l=>l.code===language)||LANGUAGES[0];

  const toggle = (field,val) => setForm(f=>({...f,[field]:f[field].includes(val)?f[field].filter(x=>x!==val):[...f[field],val]}));

  const parseResult = (text) => {
    const lines=text.split("\n"); const whatsapp=[],emails=[]; let mode=null,current=null;
    for (const raw of lines) {
      const line=raw.replace(/\*\*/g,"").trim(); if (!line) continue;
      if (/whatsapp|outreach message|message [abc]|top 3/i.test(line)){mode="whatsapp";continue;}
      if (/email template|email subject/i.test(line)){mode="email";continue;}
      if(mode==="whatsapp"){if(/^message [abc]/i.test(line)){if(current)whatsapp.push(current);current={label:line,body:[]};}else if(current)current.body.push(line);else whatsapp.push({label:"Message",body:[line]});}
      else if(mode==="email"){if(/^subject:/i.test(line)){if(current)emails.push(current);current={subject:line.replace(/^subject:\s*/i,""),body:[]};}else if(current)current.body.push(line);}
    }
    if(current&&mode==="whatsapp")whatsapp.push(current);
    if(current&&mode==="email")emails.push(current);
    return{whatsapp,emails};
  };

  const aiCall = async (prompt, maxTokens=1200) => {
    const res = await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:maxTokens,messages:[{role:"user",content:prompt}]})});
    const data = await res.json();
    return data.content?.map(b=>b.text||"").join("\n")||"No response.";
  };

  const generateStrategy = async () => {
    setLoading(true); setStep(2);
    try {
      const text = await aiCall(`You are a business development strategist. Profile:
NAME:${form.name} COMPANY:${form.company} PHONE:${form.phone} EMAIL:${form.email||"N/A"}
INDUSTRY:${form.industry} BUDGET:${form.budget||"N/A"} OFFERED:${form.offering.join(",")} NOT:${form.notWanting.join(",")}
TARGET LOCATION:${form.targetLocation} TARGET INDUSTRY:${form.targetIndustry} GOAL:${form.goal}
Respond ENTIRELY in ${language}.
1. IDEAL CLIENT PROFILE - 3 sentences.
2. TOP 3 OUTREACH MESSAGES - Label: Message A: / Message B: / Message C: under 60 words each.
3. EMAIL TEMPLATES - 2 templates. Start each: Subject: [line] then body under 100 words.
4. BEST PLATFORMS - 4 platforms, one-line tip.
5. WEEKLY ACTION PLAN - Mon-Fri one task each.
6. POWER TIP - one unconventional strategy.
Plain text only. No markdown.`,1500);
      setResult(text); setParsed(parseResult(text));
      setHistory(h=>[{id:Date.now(),date:new Date().toLocaleDateString(),company:form.company,name:form.name,language,targetIndustry:form.targetIndustry,targetLocation:form.targetLocation,text},...h.slice(0,19)]);
    } catch(e){setResult("Error. Please try again.");}
    setLoading(false);
  };

  const generateSocial = async () => {
    setSocialLoading(true); setSocialResult(null);
    try { setSocialResult(await aiCall(`Social media expert. Create 3 ready-to-post ${socialForm.platform} posts for: Business:${socialForm.business} Niche:${socialForm.niche} Goal:${socialForm.goal} Tone:${socialForm.tone}. Respond in ${language}. Label: Post 1: / Post 2: / Post 3:. Each has caption + 5 hashtags. Plain text only.`)); }
    catch(e){setSocialResult("Error.");}
    setSocialLoading(false);
  };

  const generatePricing = async () => {
    setPricingLoading(true); setPricingResult(null);
    try { setPricingResult(await aiCall(`Freelance pricing expert. Service:${pricingForm.service} Hours:${pricingForm.hours} Experience:${pricingForm.experience} Location:${pricingForm.location} Type:${pricingForm.projectType}. Respond in ${language}. Give: 1)Price range low/mid/high 2)How to justify price 3)What to include 4)Tip to charge more. Plain text only.`)); }
    catch(e){setPricingResult("Error.");}
    setPricingLoading(false);
  };

  const generateInvoice = async () => {
    setInvoiceLoading(true); setInvoiceResult(null);
    try { setInvoiceResult(await aiCall(`Create a professional invoice in ${language}:
FROM: ${invoiceForm.yourName} (${invoiceForm.yourEmail})
TO: ${invoiceForm.clientName} (${invoiceForm.clientEmail})
SERVICE: ${invoiceForm.service}
AMOUNT: ${invoiceForm.currency} ${invoiceForm.amount}
DUE DATE: ${invoiceForm.dueDate}
NOTES: ${invoiceForm.notes||"N/A"}
Write a clean formatted invoice with: Invoice number, date, from/to details, service description, amount, payment due date, payment instructions, and a polite thank you note. Plain text only.`,900)); }
    catch(e){setInvoiceResult("Error.");}
    setInvoiceLoading(false);
  };

  const generateProposal = async () => {
    setProposalLoading(true); setProposalResult(null);
    try { setProposalResult(await aiCall(`Write a professional client proposal in ${language}:
YOUR NAME: ${proposalForm.yourName}, COMPANY: ${proposalForm.company}
CLIENT: ${proposalForm.clientName}, CLIENT BUSINESS: ${proposalForm.clientBusiness}
SERVICE OFFERED: ${proposalForm.service}
BUDGET: ${proposalForm.budget}
TIMELINE: ${proposalForm.timeline}
CLIENT PROBLEM: ${proposalForm.problem}
Write a compelling proposal with: Executive summary, problem statement, proposed solution, deliverables, timeline, investment/pricing, why hire us, next steps. Professional and persuasive tone. Plain text only.`,1200)); }
    catch(e){setProposalResult("Error.");}
    setProposalLoading(false);
  };

  const generateFollowupMsg = async (fu) => {
    setFollowupLoading(true); setFollowupMsg(null); setSelectedFollowup(fu);
    try { setFollowupMsg(await aiCall(`Write a warm, non-pushy follow-up message in ${language} for:
Client: ${fu.clientName} at ${fu.company}
Reason for follow-up: ${fu.reason}
Last contacted: ${fu.lastContacted}
Notes: ${fu.notes||"N/A"}
Write 2 versions: one WhatsApp message (short, friendly, under 50 words) and one email (subject line + body under 80 words). Label: WhatsApp: and Email:. Plain text only.`)); }
    catch(e){setFollowupMsg("Error.");}
    setFollowupLoading(false);
  };

  const generateNames = async () => {
    setNamingLoading(true); setNamingResult(null);
    try { setNamingResult(await aiCall(`Business name generator. Industry:${namingForm.industry} Style:${namingForm.style} Keywords:${namingForm.keywords||"none"} Location/Market:${namingForm.location||"global"}. Respond in ${language}. Generate 10 unique business names with: name, meaning/why it works, and domain availability tip. Also suggest 3 taglines. Plain text only.`)); }
    catch(e){setNamingResult("Error.");}
    setNamingLoading(false);
  };

  const generateCompetitor = async () => {
    setCompLoading(true); setCompResult(null);
    try { setCompResult(await aiCall(`Competitor analysis expert. My service:${compForm.yourService} My location:${compForm.yourLocation} Competitor/market:${compForm.competitor||"general market"}. Respond in ${language}. Give: 1)How to differentiate from competitors 2)Your unique selling points to highlight 3)Pricing strategy vs competitors 4)Marketing angles competitors are missing 5)How to win clients they already have. Plain text only.`)); }
    catch(e){setCompResult("Error.");}
    setCompLoading(false);
  };

  const copyText = (text,id) => { navigator.clipboard.writeText(text); setCopied(id); setTimeout(()=>setCopied(null),2500); };
  const openWhatsApp = msg => window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`,"_blank");
  const openEmail = (subject,body) => window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,"_blank");

  const downloadFile = (content,filename) => {
    const blob=new Blob([content],{type:"text/plain"}); const url=URL.createObjectURL(blob);
    const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
  };

  const reset = () => { setStep(0); setResult(null); setActiveTab("strategy"); setForm({name:"",company:"",phone:"",email:"",industry:"",budget:"",offering:[],notWanting:[],targetLocation:"",targetIndustry:"",goal:""}); };

  const inp = (key,placeholder,label,obj,setObj,type="text") => (
    <div key={key}>
      <label style={{fontSize:13,color:T.textSub,marginBottom:5,display:"block",fontWeight:500}}>{label}</label>
      <input type={type} value={obj[key]} placeholder={placeholder} onChange={e=>setObj(o=>({...o,[key]:e.target.value}))}
        style={{width:"100%",padding:"10px 14px",borderRadius:10,fontSize:14,background:T.inputBg,border:`1px solid ${T.inputBorder}`,color:T.text,outline:"none",boxSizing:"border-box"}} />
    </div>
  );

  const sel = (key,options,label,obj,setObj) => (
    <div key={key}>
      <label style={{fontSize:13,color:T.textSub,marginBottom:5,display:"block",fontWeight:500}}>{label}</label>
      <select value={obj[key]} onChange={e=>setObj(o=>({...o,[key]:e.target.value}))}
        style={{width:"100%",padding:"10px 14px",borderRadius:10,fontSize:14,background:T.inputBg,border:`1px solid ${T.inputBorder}`,color:T.text,outline:"none",boxSizing:"border-box"}}>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  const pill = (label,active,onClick,ac="#a78bfa",ab="rgba(167,139,250,0.18)") => (
    <button key={label} onClick={onClick} style={{padding:"6px 11px",borderRadius:100,fontSize:12,cursor:"pointer",border:active?`1px solid ${ac}`:`1px solid ${T.pillBorder}`,background:active?ab:T.pillBg,color:active?ac:T.pillText,transition:"all 0.18s",fontWeight:active?600:400}}>{label}</button>
  );

  const card = (children,extra={}) => (
    <div style={{background:T.cardBg,borderRadius:13,border:`1px solid ${T.cardBorder}`,padding:16,marginBottom:11,...extra}}>{children}</div>
  );

  const ResultBox = ({text,copyId,filename}) => text?(
    <div>
      {card(<pre style={{whiteSpace:"pre-wrap",fontSize:13,color:T.textMid,lineHeight:1.8,margin:0,fontFamily:"inherit"}}>{text}</pre>)}
      <div style={{display:"flex",gap:7}}>
        <button onClick={()=>copyText(text,copyId)} style={{flex:1,padding:"9px",borderRadius:9,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied===copyId?"#16a34a":T.text,fontWeight:600}}>{copied===copyId?"✓ Copied!":"📋 Copy"}</button>
        {filename&&<button onClick={()=>downloadFile(text,filename)} style={{flex:1,padding:"9px",borderRadius:9,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.text,fontWeight:600}}>📄 Download</button>}
      </div>
    </div>
  ):null;

  const AIBtn = ({onClick,loading:l,disabled,label}) => (
    <button onClick={onClick} disabled={disabled||l}
      style={{width:"100%",padding:"12px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",border:"none",background:(disabled||l)?(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"):"linear-gradient(135deg,#a78bfa,#60a5fa)",color:(disabled||l)?(dark?"rgba(255,255,255,0.25)":"rgba(0,0,0,0.2)"):"#fff",transition:"all 0.3s",marginTop:4}}>
      {l?"Generating...":label}
    </button>
  );

  const currentScreen = SCREENS.find(s=>s.id===screen);

  return (
    <div style={{minHeight:"100vh",background:T.bg,fontFamily:"'Inter',sans-serif",color:T.text,transition:"all 0.3s",paddingBottom:72}}>

      {/* Header */}
      <div style={{background:T.headerBg,backdropFilter:"blur(20px)",borderBottom:`1px solid ${T.headerBorder}`,padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:32,height:32,borderRadius:9,background:"linear-gradient(135deg,#a78bfa,#60a5fa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15}}>⚡</div>
          <div>
            <div style={{fontWeight:700,fontSize:14,color:T.text}}>ClientAI Pro</div>
            <div style={{fontSize:10,color:T.textSub}}>10 AI Tools · {selectedLang.flag} {selectedLang.label}</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <button onClick={()=>setDark(d=>!d)} style={{padding:"6px 9px",borderRadius:8,background:T.btnBg,border:`1px solid ${T.btnBorder}`,color:T.text,cursor:"pointer",fontSize:14}}>{dark?"☀️":"🌙"}</button>
          <div style={{position:"relative"}}>
            <button onClick={()=>setShowLangPicker(v=>!v)} style={{display:"flex",alignItems:"center",gap:3,padding:"6px 9px",borderRadius:8,background:T.btnBg,border:`1px solid ${T.btnBorder}`,color:T.text,cursor:"pointer",fontSize:14}}>
              {selectedLang.flag}<span style={{fontSize:10,opacity:0.5}}>▼</span>
            </button>
            {showLangPicker&&(
              <div style={{position:"absolute",right:0,top:"110%",background:T.dropBg,border:`1px solid ${T.dropBorder}`,borderRadius:12,padding:7,zIndex:200,width:185,maxHeight:270,overflowY:"auto",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
                {LANGUAGES.map(lang=>(
                  <button key={lang.code} onClick={()=>{setLanguage(lang.code);setShowLangPicker(false);}} style={{width:"100%",display:"flex",alignItems:"center",gap:7,padding:"7px 9px",borderRadius:7,background:language===lang.code?(dark?"rgba(167,139,250,0.2)":"rgba(124,58,237,0.08)"):"transparent",border:"none",color:language===lang.code?T.accent:T.textMid,cursor:"pointer",fontSize:13,fontWeight:language===lang.code?700:400,textAlign:"left"}}>
                    <span style={{fontSize:15}}>{lang.flag}</span><span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={()=>setShowNav(v=>!v)} style={{padding:"6px 9px",borderRadius:8,background:T.btnBg,border:`1px solid ${T.btnBorder}`,color:T.text,cursor:"pointer",fontSize:14}}>☰</button>
        </div>
      </div>

      {/* Slide-out Nav */}
      {showNav&&(
        <div style={{position:"fixed",inset:0,zIndex:200}} onClick={()=>setShowNav(false)}>
          <div style={{position:"absolute",right:0,top:0,bottom:0,width:220,background:T.dropBg,borderLeft:`1px solid ${T.dropBorder}`,padding:"20px 12px",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontWeight:700,fontSize:14,color:T.text,marginBottom:14,padding:"0 4px"}}>All Tools</div>
            {SCREENS.map(s=>(
              <button key={s.id} onClick={()=>{setScreen(s.id);setShowNav(false);}} style={{width:"100%",display:"flex",alignItems:"center",gap:9,padding:"10px 12px",borderRadius:9,marginBottom:4,background:screen===s.id?(dark?"rgba(167,139,250,0.2)":"rgba(124,58,237,0.1)"):"transparent",border:"none",color:screen===s.id?T.accent:T.textMid,cursor:"pointer",fontSize:14,fontWeight:screen===s.id?700:400,textAlign:"left"}}>
                <span style={{fontSize:18}}>{s.icon}</span><span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>div style={{maxWidth:680,margin:"0 auto",padding:"20px 15px"}}>

  {/* ===== DASHBOARD ===== */}
  {screen==="dashboard"&&(
    <div>
      <div style={{marginBottom:20}}>
        <h1 style={{fontSize:24,fontWeight:800,margin:"0 0 6px",color:T.text}}>
          🏠 Dashboard
        </h1>
        <p style={{color:T.textSub,fontSize:13,margin:0}}>
          Welcome to ClientAI — your client acquisition workspace
        </p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:14}}>
        {[
          ["👥","Clients",clients.length],
          ["📂","Strategies",history.length],
          ["🔔","Follow-ups",followups.length],
          ["🤖","AI Tools",10]
        ].map(([icon,label,value])=>(
          <div key={label} style={{background:T.cardBg,border:`1px solid ${T.cardBorder}`,borderRadius:13,padding:16}}>
            <div style={{fontSize:22,marginBottom:7}}>{icon}</div>
            <div style={{fontSize:22,fontWeight:800,color:T.text}}>{value}</div>
            <div style={{fontSize:12,color:T.textSub,marginTop:2}}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{background:T.cardBg,border:`1px solid ${T.cardBorder}`,borderRadius:13,padding:16,marginBottom:11}}>
        <div style={{fontWeight:700,fontSize:16,color:T.text,marginBottom:12}}>
          ⚡ Quick Actions
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
          {[
            ["⚡","Generate Strategy","generate"],
            ["👥","Add / Track Clients","tracker"],
            ["📱","Create Social Posts","social"],
            ["💰","Check Pricing","pricing"],
            ["📄","Create Proposal","proposal"],
            ["🔔","Follow-up","followup"]
          ].map(([icon,label,id])=>(
            <button
              key={id}
              onClick={()=>setScreen(id)}
              style={{
                padding:"11px 8px",
                borderRadius:9,
                border:`1px solid ${T.btnBorder}`,
                background:T.btnBg,
                color:T.text,
                cursor:"pointer",
                fontSize:12,
                fontWeight:600
              }}
            >
              <div style={{fontSize:18,marginBottom:4}}>{icon}</div>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{background:T.cardBg,border:`1px solid ${T.cardBorder}`,borderRadius:13,padding:16}}>
        <div style={{fontWeight:700,fontSize:16,color:T.text,marginBottom:10}}>
          🚀 Your AI Toolkit
        </div>
        <p style={{fontSize:13,color:T.textSub,lineHeight:1.6,margin:0}}>
          Generate client strategies, manage leads, create social content,
          calculate pricing, build proposals and invoices, and follow up with clients.
        </p>

        <button
          onClick={()=>setShowNav(true)}
          style={{
            marginTop:12,
            width:"100%",
            padding:"10px",
            borderRadius:9,
            border:"none",
            background:"linear-gradient(135deg,#a78bfa,#60a5fa)",
            color:"#fff",
            cursor:"pointer",
            fontWeight:700
          }}
        >
          🧰 View All Tools
        </button>
      </div>
    </div>
  )}

  {/* ===== GENERATE ===== */}
  {screen==="generate"&&(
      
          <div>
            {step===0&&(<div>
              <div style={{textAlign:"center",marginBottom:22}}>
                <h1 style={{fontSize:24,fontWeight:800,margin:"0 0 7px",color:T.text}}>⚡ Generate Strategy</h1>
                <p style={{color:T.textSub,fontSize:13,margin:0}}>Step 1 of 2 — Your Business</p>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                {inp("name","e.g. Sarah","Your Name",form,setForm)}
                {inp("company","e.g. Studio Nook","Company Name",form,setForm)}
                {inp("phone","e.g. +66 89 123 4567","Phone / WhatsApp",form,setForm)}
                {inp("email","e.g. hello@studio.com","Email",form,setForm)}
                {inp("budget","e.g. $200/month","Budget (optional)",form,setForm)}
                <div><label style={{fontSize:13,color:T.textSub,marginBottom:7,display:"block",fontWeight:500}}>Industry</label><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{industries.map(i=>pill(i,form.industry===i,()=>setForm(f=>({...f,industry:i})),T.accent,dark?"rgba(167,139,250,0.18)":"rgba(124,58,237,0.1)"))}</div></div>
                <div><label style={{fontSize:13,color:T.textSub,marginBottom:7,display:"block",fontWeight:500}}>Services You Offer ✅</label><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{services.map(s=>pill(s,form.offering.includes(s),()=>toggle("offering",s),"#16a34a","rgba(22,163,74,0.12)"))}</div></div>
                <div><label style={{fontSize:13,color:T.textSub,marginBottom:7,display:"block",fontWeight:500}}>Don't Want ❌</label><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{services.map(s=>pill(s,form.notWanting.includes(s),()=>toggle("notWanting",s),"#dc2626","rgba(220,38,38,0.11)"))}</div></div>
              </div>
              <button onClick={()=>setStep(1)} disabled={!form.name||!form.company||!form.industry} style={{marginTop:18,width:"100%",padding:"13px",borderRadius:11,fontSize:15,fontWeight:700,cursor:"pointer",border:"none",background:(!form.name||!form.company||!form.industry)?(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"):"linear-gradient(135deg,#a78bfa,#60a5fa)",color:(!form.name||!form.company||!form.industry)?(dark?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"):"#fff"}}>Next →</button>
            </div>)}
            {step===1&&(<div>
              <div style={{textAlign:"center",marginBottom:22}}>
                <h1 style={{fontSize:24,fontWeight:800,margin:"0 0 7px",color:T.text}}>⚡ Ideal Client</h1>
                <p style={{color:T.textSub,fontSize:13,margin:0}}>Step 2 of 2 — Who do you want?</p>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                {inp("targetLocation","e.g. Bangkok, Thailand","Target Location",form,setForm)}
                <div><label style={{fontSize:13,color:T.textSub,marginBottom:7,display:"block",fontWeight:500}}>Target Industry</label><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{industries.map(i=>pill(i,form.targetIndustry===i,()=>setForm(f=>({...f,targetIndustry:i})),T.accentAlt,dark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.1)"))}</div></div>
                <div><label style={{fontSize:13,color:T.textSub,marginBottom:5,display:"block",fontWeight:500}}>Goal</label><textarea value={form.goal} placeholder="e.g. Get 5 restaurant clients this month" onChange={e=>setForm(f=>({...f,goal:e.target.value}))} rows={3} style={{width:"100%",padding:"10px 14px",borderRadius:10,fontSize:14,background:T.inputBg,border:`1px solid ${T.inputBorder}`,color:T.text,outline:"none",boxSizing:"border-box",resize:"none",fontFamily:"inherit"}}/></div>
              </div>
              <div style={{display:"flex",gap:8,marginTop:18}}>
                <button onClick={()=>setStep(0)} style={{flex:1,padding:"13px",borderRadius:11,fontSize:14,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.textMid,fontWeight:600}}>← Back</button>
                <button onClick={generateStrategy} disabled={!form.targetLocation||!form.targetIndustry} style={{flex:2,padding:"13px",borderRadius:11,fontSize:15,fontWeight:700,cursor:"pointer",border:"none",background:(!form.targetLocation||!form.targetIndustry)?(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"):"linear-gradient(135deg,#a78bfa,#60a5fa)",color:(!form.targetLocation||!form.targetIndustry)?(dark?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"):"#fff"}}>⚡ Generate in {selectedLang.label}</button>
              </div>
            </div>)}
            {step===2&&(loading?(<div style={{textAlign:"center",padding:"70px 20px"}}><div style={{fontSize:42,marginBottom:12}}>{selectedLang.flag}</div><h2 style={{fontSize:20,fontWeight:700,color:T.text}}>Generating in {selectedLang.label}...</h2><p style={{color:T.textSub,fontSize:13}}>Building your personalised plan</p></div>):(
              <div>
                <div style={{textAlign:"center",marginBottom:18}}><div style={{fontSize:36,marginBottom:7}}>🎯</div><h1 style={{fontSize:21,fontWeight:800,margin:"0 0 5px",color:T.text}}>Your Strategy</h1><span style={{background:dark?"rgba(167,139,250,0.15)":"rgba(124,58,237,0.08)",borderRadius:100,padding:"2px 9px",fontSize:11,color:T.accent}}>{selectedLang.flag} {selectedLang.label}</span></div>
                <div style={{display:"flex",gap:4,marginBottom:12,background:T.tabBg,borderRadius:10,padding:4}}>
                  {[{id:"strategy",label:"📋"},{id:"whatsapp",label:"💬"},{id:"email",label:"📧"}].map(tab=>(
                    <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{flex:1,padding:"7px",borderRadius:7,fontSize:14,fontWeight:600,cursor:"pointer",border:"none",background:activeTab===tab.id?"linear-gradient(135deg,#a78bfa,#60a5fa)":"transparent",color:activeTab===tab.id?"#fff":T.textSub,transition:"all 0.2s"}}>{tab.label}</button>
                  ))}
                </div>
                {activeTab==="strategy"&&card(<pre style={{whiteSpace:"pre-wrap",fontSize:13,color:T.textMid,lineHeight:1.8,margin:0,fontFamily:"inherit"}}>{result}</pre>)}
                {activeTab==="whatsapp"&&(parsed.whatsapp.length>0?parsed.whatsapp.map((msg,i)=>card(<div key={i}><div style={{fontWeight:700,color:"#16a34a",marginBottom:6,fontSize:13}}>💬 {msg.label}</div><p style={{fontSize:13,color:T.textMid,lineHeight:1.65,margin:"0 0 10px"}}>{msg.body.join(" ")}</p><div style={{display:"flex",gap:6}}><button onClick={()=>copyText(msg.body.join(" "),`wa${i}`)} style={{flex:1,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied===`wa${i}`?"#16a34a":T.textMid,fontWeight:600}}>{copied===`wa${i}`?"✓":"📋 Copy"}</button><button onClick={()=>openWhatsApp(msg.body.join(" "))} style={{flex:2,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",fontWeight:700}}>Send WhatsApp →</button></div></div>)):card(<p style={{color:T.textSub,fontSize:13,textAlign:"center",margin:0}}>See Strategy tab.</p>))}
                {activeTab==="email"&&(parsed.emails.length>0?parsed.emails.map((em,i)=>card(<div key={i}><div style={{fontWeight:700,color:T.accentAlt,marginBottom:6,fontSize:13}}>📧 Template {i+1}</div><div style={{background:dark?"rgba(96,165,250,0.1)":"rgba(37,99,235,0.07)",borderRadius:7,padding:"6px 10px",marginBottom:8}}><span style={{fontSize:11,color:T.textSub}}>Subject: </span><span style={{fontSize:13,color:T.text,fontWeight:600}}>{em.subject}</span></div><p style={{fontSize:13,color:T.textMid,lineHeight:1.65,margin:"0 0 9px"}}>{em.body.join(" ")}</p><div style={{display:"flex",gap:6}}><button onClick={()=>copyText(`Subject: ${em.subject}\n\n${em.body.join("\n")}`,`em${i}`)} style={{flex:1,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied===`em${i}`?"#16a34a":T.textMid,fontWeight:600}}>{copied===`em${i}`?"✓":"📋"}</button><button onClick={()=>openEmail(em.subject,em.body.join("\n"))} style={{flex:2,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#60a5fa,#3b82f6)",color:"#fff",fontWeight:700}}>Open Email →</button></div></div>)):card(<p style={{color:T.textSub,fontSize:13,textAlign:"center",margin:0}}>See Strategy tab.</p>))}
                <div style={{display:"flex",gap:6,marginTop:12}}>
                  <button onClick={()=>downloadFile(result,`${form.company}_strategy.txt`)} style={{flex:1,padding:"9px",borderRadius:9,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.text,fontWeight:600}}>📄 Save</button>
                  <button onClick={()=>copyText(result,"all")} style={{flex:1,padding:"9px",borderRadius:9,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied==="all"?"#16a34a":T.text,fontWeight:600}}>{copied==="all"?"✓ Copied":"📋 Copy"}</button>
                  <button onClick={reset} style={{flex:1,padding:"9px",borderRadius:9,fontSize:12,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>⚡ New</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== HISTORY ===== */}
        {screen==="history"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>📂 History</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:16}}>{history.length} saved strategies</p>
          {viewingHistory?(<div>
            <button onClick={()=>setViewingHistory(null)} style={{marginBottom:12,padding:"7px 13px",borderRadius:8,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.text,fontWeight:600}}>← Back</button>
            {card(<div><div style={{fontWeight:700,fontSize:14,color:T.text,marginBottom:3}}>{viewingHistory.company}</div><div style={{fontSize:11,color:T.textSub,marginBottom:12}}>{viewingHistory.date} · {viewingHistory.language}</div><pre style={{whiteSpace:"pre-wrap",fontSize:13,color:T.textMid,lineHeight:1.8,margin:0,fontFamily:"inherit"}}>{viewingHistory.text}</pre></div>)}
            <button onClick={()=>copyText(viewingHistory.text,"hist")} style={{width:"100%",padding:"9px",borderRadius:9,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied==="hist"?"#16a34a":T.text,fontWeight:600}}>{copied==="hist"?"✓ Copied":"📋 Copy Strategy"}</button>
          </div>):history.length===0?card(<div style={{textAlign:"center",padding:"28px 0"}}><div style={{fontSize:34,marginBottom:9}}>📂</div><p style={{color:T.textSub,fontSize:14,margin:0}}>No strategies yet.</p><button onClick={()=>setScreen("generate")} style={{marginTop:12,padding:"9px 18px",borderRadius:9,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>Generate Now</button></div>):history.map(h=>card(<div key={h.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontWeight:700,fontSize:14,color:T.text}}>{h.company}</div><div style={{fontSize:11,color:T.textSub}}>{h.date} · {h.language} · {h.targetIndustry}</div></div><button onClick={()=>setViewingHistory(h)} style={{padding:"6px 12px",borderRadius:8,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.accent,fontWeight:600}}>View →</button></div>))}
        </div>)}

        {/* ===== TRACKER ===== */}
        {screen==="tracker"&&(<div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div><h2 style={{fontSize:22,fontWeight:800,margin:0,color:T.text}}>👥 Tracker</h2><p style={{color:T.textSub,fontSize:12,margin:"3px 0 0"}}>{clients.length} clients</p></div>
            <button onClick={()=>setShowAddClient(v=>!v)} style={{padding:"8px 13px",borderRadius:9,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>+ Add</button>
          </div>
          {showAddClient&&card(<div><div style={{fontWeight:700,fontSize:14,color:T.text,marginBottom:10}}>New Client</div><div style={{display:"flex",flexDirection:"column",gap:9}}>{inp("name","Client name","Name",newClient,setNewClient)}{inp("company","Company","Company",newClient,setNewClient)}{inp("contact","Phone/email","Contact",newClient,setNewClient)}{sel("status",Object.keys(statusColors),"Status",newClient,setNewClient)}{inp("notes","Notes...","Notes",newClient,setNewClient)}</div><div style={{display:"flex",gap:7,marginTop:11}}><button onClick={()=>setShowAddClient(false)} style={{flex:1,padding:"8px",borderRadius:8,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.textMid,fontWeight:600}}>Cancel</button><button onClick={()=>{if(newClient.name){setClients(c=>[{...newClient,id:Date.now(),date:new Date().toLocaleDateString()},...c]);setNewClient({name:"",company:"",contact:"",status:"Not Contacted",notes:""});setShowAddClient(false);}}} style={{flex:2,padding:"8px",borderRadius:8,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>Save</button></div></div>)}
          {clients.length>0&&card(<div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>{Object.entries(statusColors).map(([s,c])=>{const count=clients.filter(x=>x.status===s).length;return count>0&&(<div key={s}><div style={{fontSize:18,fontWeight:800,color:c}}>{count}</div><div style={{fontSize:10,color:T.textSub,maxWidth:60}}>{s}</div></div>);})}</div>)}
          {clients.length===0&&!showAddClient&&card(<div style={{textAlign:"center",padding:"28px 0"}}><div style={{fontSize:34,marginBottom:9}}>👥</div><p style={{color:T.textSub,fontSize:14,margin:0}}>No clients yet.</p></div>)}
          {clients.map(c=>card(<div key={c.id}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div style={{flex:1}}><div style={{fontWeight:700,fontSize:14,color:T.text}}>{c.name}</div><div style={{fontSize:12,color:T.textSub}}>{c.company}{c.contact?` · ${c.contact}`:""}</div>{c.notes&&<div style={{fontSize:12,color:T.textSub,fontStyle:"italic",marginTop:3}}>{c.notes}</div>}</div><span style={{background:`${statusColors[c.status]}20`,color:statusColors[c.status],border:`1px solid ${statusColors[c.status]}40`,borderRadius:100,padding:"3px 9px",fontSize:11,fontWeight:700,whiteSpace:"nowrap",marginLeft:8}}>{c.status}</span></div><div style={{display:"flex",gap:5,marginTop:10,flexWrap:"wrap"}}>{Object.keys(statusColors).filter(s=>s!==c.status).map(s=><button key={s} onClick={()=>setClients(cl=>cl.map(x=>x.id===c.id?{...x,status:s}:x))} style={{padding:"3px 8px",borderRadius:6,fontSize:10,cursor:"pointer",border:`1px solid ${statusColors[s]}40`,background:`${statusColors[s]}15`,color:statusColors[s],fontWeight:600}}>{s}</button>)}<button onClick={()=>setClients(cl=>cl.filter(x=>x.id!==c.id))} style={{padding:"3px 9px",borderRadius:6,fontSize:11,cursor:"pointer",border:"1px solid rgba(220,38,38,0.3)",background:"rgba(220,38,38,0.08)",color:"#dc2626",fontWeight:600,marginLeft:"auto"}}>Remove</button></div></div>))}
        </div>)}

        {/* ===== SOCIAL ===== */}
        {screen==="social"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>📱 Social Posts</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Ready-to-post content in {selectedLang.label}</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>{inp("business","e.g. Studio Nook","Business Name",socialForm,setSocialForm)}{inp("niche","e.g. Web design for restaurants","Your Niche",socialForm,setSocialForm)}{sel("platform",["Instagram","Facebook","LinkedIn","TikTok","Twitter/X"],"Platform",socialForm,setSocialForm)}{sel("goal",["Get more clients","Promote a service","Share a tip","Show portfolio","Build trust"],"Goal",socialForm,setSocialForm)}{sel("tone",["Professional","Friendly","Funny","Inspirational","Bold"],"Tone",socialForm,setSocialForm)}<AIBtn onClick={generateSocial} loading={socialLoading} disabled={!socialForm.business} label={`📱 Generate Posts in ${selectedLang.label}`}/></div>)}
          <ResultBox text={socialResult} copyId="social" filename="social_posts.txt"/>
        </div>)}

        {/* ===== PRICING ===== */}
        {screen==="pricing"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>💰 Pricing</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Know what to charge your clients</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>{sel("service",services,"Service",pricingForm,setPricingForm)}{inp("hours","e.g. 10","Estimated Hours",pricingForm,setPricingForm)}{sel("experience",["Beginner (0-1yr)","Intermediate (1-3yrs)","Experienced (3-5yrs)","Expert (5+yrs)"],"Experience",pricingForm,setPricingForm)}{inp("location","e.g. Bangkok, Thailand","Your Market",pricingForm,setPricingForm)}{sel("projectType",["One-time","Monthly Retainer","Hourly","Package Deal"],"Project Type",pricingForm,setPricingForm)}<AIBtn onClick={generatePricing} loading={pricingLoading} label={`💰 Calculate Price in ${selectedLang.label}`}/></div>)}
          <ResultBox text={pricingResult} copyId="pricing"/>
        </div>)}

        {/* ===== INVOICE ===== */}
        {screen==="invoice"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>🧾 Invoice Generator</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Create professional invoices instantly</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>
            {inp("yourName","Your name / company","Your Name",invoiceForm,setInvoiceForm)}
            {inp("yourEmail","your@email.com","Your Email",invoiceForm,setInvoiceForm)}
            {inp("clientName","Client name","Client Name",invoiceForm,setInvoiceForm)}
            {inp("clientEmail","client@email.com","Client Email",invoiceForm,setInvoiceForm)}
            {inp("service","e.g. Website Design for Thai Bistro","Service Description",invoiceForm,setInvoiceForm)}
            <div style={{display:"flex",gap:8}}>
              {sel("currency",["USD","THB","EUR","GBP","INR","BDT","SGD","AUD"],"Currency",invoiceForm,setInvoiceForm)}
              {inp("amount","e.g. 500","Amount",invoiceForm,setInvoiceForm)}
            </div>
            {inp("dueDate","e.g. 15 July 2026","Due Date",invoiceForm,setInvoiceForm)}
            {inp("notes","e.g. Bank transfer to...","Payment Notes",invoiceForm,setInvoiceForm)}
            <AIBtn onClick={generateInvoice} loading={invoiceLoading} disabled={!invoiceForm.yourName||!invoiceForm.clientName||!invoiceForm.amount} label={`🧾 Generate Invoice in ${selectedLang.label}`}/>
          </div>)}
          <ResultBox text={invoiceResult} copyId="invoice" filename="invoice.txt"/>
        </div>)}

        {/* ===== PROPOSAL ===== */}
        {screen==="proposal"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>📄 Proposal Builder</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Win clients with a professional proposal</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>
            {inp("yourName","Your name","Your Name",proposalForm,setProposalForm)}
            {inp("company","Your company","Your Company",proposalForm,setProposalForm)}
            {inp("clientName","Client's name","Client Name",proposalForm,setProposalForm)}
            {inp("clientBusiness","e.g. Thai Bistro Restaurant","Client's Business",proposalForm,setProposalForm)}
            {inp("service","e.g. Website Design + SEO","Service You're Offering",proposalForm,setProposalForm)}
            {inp("budget","e.g. $500","Budget / Price",proposalForm,setProposalForm)}
            {inp("timeline","e.g. 2 weeks","Timeline",proposalForm,setProposalForm)}
            <div><label style={{fontSize:13,color:T.textSub,marginBottom:5,display:"block",fontWeight:500}}>Client's Problem / Need</label><textarea value={proposalForm.problem} placeholder="e.g. They have no website, losing customers to competitors" onChange={e=>setProposalForm(o=>({...o,problem:e.target.value}))} rows={3} style={{width:"100%",padding:"10px 14px",borderRadius:10,fontSize:14,background:T.inputBg,border:`1px solid ${T.inputBorder}`,color:T.text,outline:"none",boxSizing:"border-box",resize:"none",fontFamily:"inherit"}}/></div>
            <AIBtn onClick={generateProposal} loading={proposalLoading} disabled={!proposalForm.yourName||!proposalForm.clientName||!proposalForm.service} label={`📄 Generate Proposal in ${selectedLang.label}`}/>
          </div>)}
          <ResultBox text={proposalResult} copyId="proposal" filename="proposal.txt"/>
        </div>)}

        {/* ===== FOLLOW-UP ===== */}
        {screen==="followup"&&(<div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div><h2 style={{fontSize:22,fontWeight:800,margin:0,color:T.text}}>🔔 Follow-ups</h2><p style={{color:T.textSub,fontSize:12,margin:"3px 0 0"}}>{followups.length} reminders</p></div>
            <button onClick={()=>setShowAddFollowup(v=>!v)} style={{padding:"8px 13px",borderRadius:9,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>+ Add</button>
          </div>
          {showAddFollowup&&card(<div><div style={{fontWeight:700,fontSize:14,color:T.text,marginBottom:10}}>New Follow-up</div><div style={{display:"flex",flexDirection:"column",gap:9}}>{inp("clientName","Client name","Client Name",newFollowup,setNewFollowup)}{inp("company","Company","Company",newFollowup,setNewFollowup)}{inp("contact","Phone/WhatsApp","Contact",newFollowup,setNewFollowup)}{inp("lastContacted","e.g. June 20","Last Contacted",newFollowup,setNewFollowup)}{inp("followupDate","e.g. June 27","Follow-up Date",newFollowup,setNewFollowup)}{sel("reason",["Follow up on proposal","Check interest","Share portfolio","Reconnect","Other"],"Reason",newFollowup,setNewFollowup)}{inp("notes","Any notes","Notes",newFollowup,setNewFollowup)}</div><div style={{display:"flex",gap:7,marginTop:11}}><button onClick={()=>setShowAddFollowup(false)} style={{flex:1,padding:"8px",borderRadius:8,fontSize:13,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:T.textMid,fontWeight:600}}>Cancel</button><button onClick={()=>{if(newFollowup.clientName){setFollowups(f=>[{...newFollowup,id:Date.now()},...f]);setNewFollowup({clientName:"",company:"",contact:"",lastContacted:"",followupDate:"",reason:"Follow up on proposal",notes:""});setShowAddFollowup(false);}}} style={{flex:2,padding:"8px",borderRadius:8,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>Save</button></div></div>)}
          {followups.length===0&&!showAddFollowup&&card(<div style={{textAlign:"center",padding:"28px 0"}}><div style={{fontSize:34,marginBottom:9}}>🔔</div><p style={{color:T.textSub,fontSize:14,margin:0}}>No follow-ups yet.</p></div>)}
          {followups.map(fu=>card(<div key={fu.id}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div><div style={{fontWeight:700,fontSize:14,color:T.text}}>{fu.clientName} · {fu.company}</div><div style={{fontSize:12,color:T.textSub}}>{fu.reason}</div>{fu.followupDate&&<div style={{fontSize:12,color:"#f59e0b",fontWeight:600,marginTop:2}}>📅 Follow up: {fu.followupDate}</div>}</div>
              <button onClick={()=>setFollowups(f=>f.filter(x=>x.id!==fu.id))} style={{padding:"3px 9px",borderRadius:6,fontSize:11,cursor:"pointer",border:"1px solid rgba(220,38,38,0.3)",background:"rgba(220,38,38,0.08)",color:"#dc2626",fontWeight:600}}>Remove</button>
            </div>
            <button onClick={()=>generateFollowupMsg(fu)} disabled={followupLoading&&selectedFollowup?.id===fu.id} style={{marginTop:10,width:"100%",padding:"8px",borderRadius:9,fontSize:13,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",color:"#fff",fontWeight:700}}>{followupLoading&&selectedFollowup?.id===fu.id?"Generating...":"✍️ Generate Follow-up Message"}</button>
            {selectedFollowup?.id===fu.id&&followupMsg&&(<div style={{marginTop:10}}><pre style={{whiteSpace:"pre-wrap",fontSize:13,color:T.textMid,lineHeight:1.7,margin:"0 0 9px",fontFamily:"inherit",background:T.inputBg,borderRadius:9,padding:12,border:`1px solid ${T.inputBorder}`}}>{followupMsg}</pre><div style={{display:"flex",gap:6}}><button onClick={()=>copyText(followupMsg,"fu")} style={{flex:1,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:`1px solid ${T.btnBorder}`,background:T.btnBg,color:copied==="fu"?"#16a34a":T.text,fontWeight:600}}>{copied==="fu"?"✓ Copied":"📋 Copy"}</button><button onClick={()=>openWhatsApp(followupMsg)} style={{flex:2,padding:"7px",borderRadius:7,fontSize:12,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",fontWeight:700}}>Send WhatsApp →</button></div></div>)}
          </div>))}
        </div>)}

        {/* ===== NAMING ===== */}
        {screen==="naming"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>✨ Business Name AI</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Find the perfect name for your business</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>
            {inp("industry","e.g. Web Design, Restaurant, Beauty","Your Industry",namingForm,setNamingForm)}
            {sel("style",["Modern","Classic","Playful","Luxury","Minimal","Bold","Local","International"],"Name Style",namingForm,setNamingForm)}
            {inp("keywords","e.g. gold, creative, fast, fresh","Keywords (optional)",namingForm,setNamingForm)}
            {inp("location","e.g. Bangkok, Global, Southeast Asia","Target Market",namingForm,setNamingForm)}
            <AIBtn onClick={generateNames} loading={namingLoading} disabled={!namingForm.industry} label={`✨ Generate Names in ${selectedLang.label}`}/>
          </div>)}
          <ResultBox text={namingResult} copyId="naming"/>
        </div>)}

        {/* ===== COMPETITOR ===== */}
        {screen==="competitor"&&(<div>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:5,color:T.text}}>🔍 Competitor Analysis</h2>
          <p style={{color:T.textSub,fontSize:13,marginBottom:14}}>Beat your competition with AI insights</p>
          {card(<div style={{display:"flex",flexDirection:"column",gap:10}}>
            {inp("yourService","e.g. Website Design","Your Service",compForm,setCompForm)}
            {inp("yourLocation","e.g. Bangkok, Thailand","Your Location",compForm,setCompForm)}
            {inp("competitor","e.g. Wix, Fiverr, local agencies (optional)","Competitor / Market",compForm,setCompForm)}
            <AIBtn onClick={generateCompetitor} loading={compLoading} disabled={!compForm.yourService||!compForm.yourLocation} label={`🔍 Analyse in ${selectedLang.label}`}/>
          </div>)}
          <ResultBox text={compResult} copyId="comp"/>
        </div>)}

      </div>

      {/* Bottom Nav */}
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:T.navBg,backdropFilter:"blur(20px)",borderTop:`1px solid ${T.navBorder}`,display:"flex",padding:"7px 2px 11px",zIndex:100,overflowX:"auto"}}>
        {SCREENS.map(s=>(
          <button key={s.id} onClick={()=>setScreen(s.id)} style={{flex:"0 0 auto",minWidth:62,display:"flex",flexDirection:"column",alignItems:"center",gap:1,padding:"5px 4px",borderRadius:9,border:"none",background:screen===s.id?(dark?"rgba(167,139,250,0.15)":"rgba(124,58,237,0.1)"):"transparent",cursor:"pointer",color:screen===s.id?T.accent:T.textSub,fontWeight:screen===s.id?700:400,transition:"all 0.2s"}}>
            <span style={{fontSize:17}}>{s.icon}</span>
            <span style={{fontSize:9}}>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
