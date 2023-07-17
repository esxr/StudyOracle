(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5861)}])},1198:function(e,t,r){"use strict";var l=r(5893);r(7294);var n=r(1664),s=r.n(n),i=r(9361);let{useToken:o}=i.default;t.Z=()=>{let{token:e}=o();return(0,l.jsx)("header",{style:{backgroundColor:e.colorAccent},children:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsxs)("h1",{style:{color:e.colorTextInvert,margin:0},children:["Study Oracle ",(0,l.jsx)("sup",{style:{fontSize:10},children:"BETA"})]}),(0,l.jsx)("div",{style:{marginLeft:"auto",marginRight:16},children:(0,l.jsx)(s(),{href:"/about",children:(0,l.jsx)("div",{style:{color:"white"},children:"About"})})})]})})}},5861:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var l=r(5893),n=r(7294),s=r(9008),i=r.n(s),o=r(1274),a=r(9361),d=r(1198),c=r(9356),h=r(3981),u=r(8073),x=r(532),f=r(4969),y=r(1664),g=r.n(y);let{useToken:j}=a.default;var p=e=>{let{collapsed:t,handleToggleSidebar:r,handleSelectedFile:s,dataSource:i,loading:o}=e,a=(0,n.useRef)(null),{token:d}=j();return(0,l.jsxs)("div",{style:{height:"100%",padding:"16px",display:"flex",flexDirection:"column",backgroundColor:d.colorSecondary,color:d.colorText},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:t?(0,l.jsx)(c.ZP,{type:"text",icon:(0,l.jsx)(u.Z,{}),onClick:r}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{style:{margin:0},children:"Data"}),(0,l.jsx)(c.ZP,{type:"text",icon:(0,l.jsx)(x.Z,{}),onClick:r})]})}),!t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{flex:1,overflowY:"auto",marginTop:10},children:!0==o?(0,l.jsx)("h3",{children:"Loading..."}):(0,l.jsx)(h.Z,{dataSource:i,renderItem:e=>(0,l.jsx)(h.Z.Item,{children:e}),bordered:!0})}),(0,l.jsx)(c.ZP,{type:"primary",danger:!0,style:{marginTop:10},children:(0,l.jsx)(g(),{href:"/about",children:"How to use?"})}),(0,l.jsxs)(c.ZP,{type:"primary",icon:(0,l.jsx)(f.Z,{}),style:{marginTop:10},onClick:()=>{try{a.current.click()}catch(e){console.error("Error opening file browser:",e)}},children:[(0,l.jsx)("input",{type:"file",style:{display:"none"},ref:a,onChange:e=>{s(e.target.files[0])}}),"Add File"]})]})]})};let{useToken:m}=a.default;var v=e=>{let{text:t,sender:r}=e,{token:n}=m(),s="me"===r;return(0,l.jsx)("div",{style:{backgroundColor:s?"#1890ff":"#f2f2f2",color:s?"white":"black",padding:10,marginBottom:10,borderRadius:5,alignSelf:s?"flex-end":"flex-start",maxWidth:"70%",display:"flex",alignItems:"center"},children:s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{marginRight:8,width:32,height:32,borderRadius:"50%",backgroundColor:"#1890ff"}}),(0,l.jsx)("div",{children:t})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{marginLeft:8,width:32,height:32,borderRadius:"50%",backgroundColor:"#f2f2f2"}}),(0,l.jsx)("div",{children:t})]})})},b=e=>{let{chatHistory:t}=e;return(0,l.jsx)("div",{style:{flex:1,overflowY:"auto",marginBottom:20},children:t.map((e,t)=>(0,l.jsx)(v,{text:e.text,sender:e.sender},t))})},k=r(7917),w=e=>{let{message:t,handleMessageChange:r,handleSendMessage:n}=e;return(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)(k.Z,{type:"text",value:t,onChange:r,placeholder:"Type your message...",style:{flex:1,borderRadius:5,marginRight:10}}),(0,l.jsx)(c.ZP,{type:"primary",onClick:n,children:"Send"})]})};let{Header:C,Sider:S,Content:T}=o.default,{useToken:Z}=a.default;function _(){let{token:e}=Z(),[t,r]=(0,n.useState)(!1),[s,a]=(0,n.useState)(""),[c,h]=(0,n.useState)([]),[u,x]=(0,n.useState)(!1),[f,y]=(0,n.useState)([]),[g,j]=(0,n.useState)(!1),m=async()=>{if(""!==s.trim()){h([...c,{text:s,sender:"me"}]),a(""),x(!0);try{let e=await fetch("/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})});if(e.ok){let t=await e.text();h(e=>[...e,{text:t,sender:"AI"}])}else console.error("API request failed")}catch(e){console.error("API request error:",e)}x(!1)}},v=()=>{r(!t)},k=async e=>{if(j(!0),e)try{let t=new FormData;t.append("file",e);let r=await fetch("/doc",{method:"POST",body:t});r.ok?y(t=>[...t,e.name]):(console.error("File upload failed"),alert("File Upload Failed!"))}catch(e){console.error("File upload error:",e)}j(!1)};return(0,l.jsxs)("div",{style:{height:"100vh"},children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:"Study Oracle"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)(o.default,{style:{height:"100vh"},children:[(0,l.jsx)(C,{style:{backgroundColor:e.colorAccent},children:(0,l.jsx)(d.Z,{})}),(0,l.jsxs)(o.default,{style:{height:"calc(100% - 64px)"},children:[(0,l.jsx)(S,{width:t?80:200,collapsible:!0,collapsed:t,onCollapse:v,children:(0,l.jsx)(p,{collapsed:t,handleToggleSidebar:v,handleSelectedFile:k,dataSource:f,loading:g})}),(0,l.jsx)(T,{style:{backgroundColor:e.colorBgBase},children:(0,l.jsxs)("div",{style:{height:"100%",borderLeft:"1px solid",borderLeftColor:e.colorSecondary,padding:20,display:"flex",flexDirection:"column"},children:[(0,l.jsx)(b,{chatHistory:c}),(0,l.jsx)(w,{message:s,handleMessageChange:e=>{a(e.target.value)},handleSendMessage:m})]})})]})]})]})}}},function(e){e.O(0,[348,730,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);