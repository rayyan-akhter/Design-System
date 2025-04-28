import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as s}from"./index-DRjF_FHU.js";import{f as Ee,g as re,u as ne,h as Ae,P as j,b as C,a as oe,c as Pe,d as De}from"./index-LwMEaweW.js";import{u as Ve}from"./index-LOOTFJQl.js";import{c as k}from"./utils-jM7Hu9J5.js";/* empty css              */import"./index-CmHj60O0.js";function Me(e,r=[]){let a=[];function n(f,o){const i=s.createContext(o),b=a.length;a=[...a,o];function l(d){const{scope:g,children:N,...u}=d,y=(g==null?void 0:g[e][b])||i,S=s.useMemo(()=>u,Object.values(u));return t.jsx(y.Provider,{value:S,children:N})}function v(d,g){const N=(g==null?void 0:g[e][b])||i,u=s.useContext(N);if(u)return u;if(o!==void 0)return o;throw new Error(`\`${d}\` must be used within \`${f}\``)}return l.displayName=f+"Provider",[l,v]}const c=()=>{const f=a.map(o=>s.createContext(o));return function(i){const b=(i==null?void 0:i[e])||f;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:b}}),[i,b])}};return c.scopeName=e,[n,Ge(c,...r)]}function Ge(...e){const r=e[0];if(e.length===1)return r;const a=()=>{const n=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(f){const o=n.reduce((i,{useScope:b,scopeName:l})=>{const d=b(f)[`__scope${l}`];return{...i,...d}},{});return s.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return a.scopeName=r.scopeName,a}var G="rovingFocusGroup.onEntryFocus",Le={bubbles:!1,cancelable:!0},P="RovingFocusGroup",[L,se,ke]=Ee(P),[Oe,ie]=Me(P,[ke]),[$e,ze]=Oe(P),ce=s.forwardRef((e,r)=>t.jsx(L.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(L.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Ke,{...e,ref:r})})}));ce.displayName=P;var Ke=s.forwardRef((e,r)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:c=!1,dir:f,currentTabStopId:o,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:b,onEntryFocus:l,preventScrollOnEntryFocus:v=!1,...d}=e,g=s.useRef(null),N=Ve(r,g),u=re(f),[y=null,S]=ne({prop:o,defaultProp:i,onChange:b}),[T,h]=s.useState(!1),D=Ae(l),je=se(a),V=s.useRef(!1),[Ie,z]=s.useState(0);return s.useEffect(()=>{const m=g.current;if(m)return m.addEventListener(G,D),()=>m.removeEventListener(G,D)},[D]),t.jsx($e,{scope:a,orientation:n,dir:u,loop:c,currentTabStopId:y,onItemFocus:s.useCallback(m=>S(m),[S]),onItemShiftTab:s.useCallback(()=>h(!0),[]),onFocusableItemAdd:s.useCallback(()=>z(m=>m+1),[]),onFocusableItemRemove:s.useCallback(()=>z(m=>m-1),[]),children:t.jsx(j.div,{tabIndex:T||Ie===0?-1:0,"data-orientation":n,...d,ref:N,style:{outline:"none",...e.style},onMouseDown:C(e.onMouseDown,()=>{V.current=!0}),onFocus:C(e.onFocus,m=>{const Se=!V.current;if(m.target===m.currentTarget&&Se&&!T){const K=new CustomEvent(G,Le);if(m.currentTarget.dispatchEvent(K),!K.defaultPrevented){const M=je().filter(w=>w.focusable),Re=M.find(w=>w.active),Fe=M.find(w=>w.id===y),_e=[Re,Fe,...M].filter(Boolean).map(w=>w.ref.current);ue(_e,v)}}V.current=!1}),onBlur:C(e.onBlur,()=>h(!1))})})}),le="RovingFocusGroupItem",de=s.forwardRef((e,r)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:c=!1,tabStopId:f,...o}=e,i=oe(),b=f||i,l=ze(le,a),v=l.currentTabStopId===b,d=se(a),{onFocusableItemAdd:g,onFocusableItemRemove:N}=l;return s.useEffect(()=>{if(n)return g(),()=>N()},[n,g,N]),t.jsx(L.ItemSlot,{scope:a,id:b,focusable:n,active:c,children:t.jsx(j.span,{tabIndex:v?0:-1,"data-orientation":l.orientation,...o,ref:r,onMouseDown:C(e.onMouseDown,u=>{n?l.onItemFocus(b):u.preventDefault()}),onFocus:C(e.onFocus,()=>l.onItemFocus(b)),onKeyDown:C(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){l.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const y=He(u,l.orientation,l.dir);if(y!==void 0){if(u.metaKey||u.ctrlKey||u.altKey||u.shiftKey)return;u.preventDefault();let T=d().filter(h=>h.focusable).map(h=>h.ref.current);if(y==="last")T.reverse();else if(y==="prev"||y==="next"){y==="prev"&&T.reverse();const h=T.indexOf(u.currentTarget);T=l.loop?Ye(T,h+1):T.slice(h+1)}setTimeout(()=>ue(T))}})})})});de.displayName=le;var Be={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ue(e,r){return r!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function He(e,r,a){const n=Ue(e.key,a);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Be[n]}function ue(e,r=!1){const a=document.activeElement;for(const n of e)if(n===a||(n.focus({preventScroll:r}),document.activeElement!==a))return}function Ye(e,r){return e.map((a,n)=>e[(r+n)%e.length])}var qe=ce,Je=de,O="Tabs",[Qe,it]=Pe(O,[ie]),fe=ie(),[We,$]=Qe(O),be=s.forwardRef((e,r)=>{const{__scopeTabs:a,value:n,onValueChange:c,defaultValue:f,orientation:o="horizontal",dir:i,activationMode:b="automatic",...l}=e,v=re(i),[d,g]=ne({prop:n,onChange:c,defaultProp:f});return t.jsx(We,{scope:a,baseId:oe(),value:d,onValueChange:g,orientation:o,dir:v,activationMode:b,children:t.jsx(j.div,{dir:v,"data-orientation":o,...l,ref:r})})});be.displayName=O;var ge="TabsList",ve=s.forwardRef((e,r)=>{const{__scopeTabs:a,loop:n=!0,...c}=e,f=$(ge,a),o=fe(a);return t.jsx(qe,{asChild:!0,...o,orientation:f.orientation,dir:f.dir,loop:n,children:t.jsx(j.div,{role:"tablist","aria-orientation":f.orientation,...c,ref:r})})});ve.displayName=ge;var me="TabsTrigger",pe=s.forwardRef((e,r)=>{const{__scopeTabs:a,value:n,disabled:c=!1,...f}=e,o=$(me,a),i=fe(a),b=Te(o.baseId,n),l=he(o.baseId,n),v=n===o.value;return t.jsx(Je,{asChild:!0,...i,focusable:!c,active:v,children:t.jsx(j.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":l,"data-state":v?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:b,...f,ref:r,onMouseDown:C(e.onMouseDown,d=>{!c&&d.button===0&&d.ctrlKey===!1?o.onValueChange(n):d.preventDefault()}),onKeyDown:C(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(n)}),onFocus:C(e.onFocus,()=>{const d=o.activationMode!=="manual";!v&&!c&&d&&o.onValueChange(n)})})})});pe.displayName=me;var xe="TabsContent",ye=s.forwardRef((e,r)=>{const{__scopeTabs:a,value:n,forceMount:c,children:f,...o}=e,i=$(xe,a),b=Te(i.baseId,n),l=he(i.baseId,n),v=n===i.value,d=s.useRef(v);return s.useEffect(()=>{const g=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(g)},[]),t.jsx(De,{present:c||v,children:({present:g})=>t.jsx(j.div,{"data-state":v?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":b,hidden:!g,id:l,tabIndex:0,...o,ref:r,style:{...e.style,animationDuration:d.current?"0s":void 0},children:g&&f})})});ye.displayName=xe;function Te(e,r){return`${e}-trigger-${r}`}function he(e,r){return`${e}-content-${r}`}var Xe=be,Ce=ve,Ne=pe,we=ye;const R=Xe,I=s.forwardRef(({className:e,...r},a)=>t.jsx(Ce,{ref:a,className:k("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...r}));I.displayName=Ce.displayName;const p=s.forwardRef(({className:e,...r},a)=>t.jsx(Ne,{ref:a,className:k("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",e),...r}));p.displayName=Ne.displayName;const x=s.forwardRef(({className:e,...r},a)=>t.jsx(we,{ref:a,className:k("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...r}));x.displayName=we.displayName;I.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};x.__docgenInfo={description:"",methods:[]};const ct={title:"Components/Tabs",component:R,tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"Default selected tab",table:{type:{summary:"string"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"Tab orientation",table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},value:{control:"text",description:"Controlled selected tab",table:{type:{summary:"string"}}},onValueChange:{action:"onValueChange",description:"Callback when tab changes",table:{type:{summary:"(value: string) => void"}}},children:{control:!1}}},B=[{value:"account",label:"Account",content:"Account content"},{value:"password",label:"Password",content:"Password content"},{value:"settings",label:"Settings",content:"Settings content"}],F={args:{defaultValue:"account",orientation:"horizontal"},render:e=>{const r=e.orientation==="vertical";return t.jsxs(R,{...e,children:[t.jsx(I,{className:r?"flex flex-col h-auto bg-tertiary/10":"bg-primary/10",children:B.map(a=>t.jsx(p,{value:a.value,children:a.label},a.value))}),B.map(a=>t.jsx(x,{value:a.value,children:a.content},a.value))]})}},_={args:{defaultValue:"overview",orientation:"horizontal"},render:e=>t.jsxs(R,{...e,children:[t.jsxs(I,{className:e.orientation==="vertical"?"flex flex-col h-auto bg-secondary/10":"grid w-full grid-cols-3 bg-secondary/10",children:[t.jsx(p,{value:"overview",className:"data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary",children:"Overview"}),t.jsx(p,{value:"analytics",className:"data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary",children:"Analytics"}),t.jsx(p,{value:"reports",className:"data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary",children:"Reports"})]}),t.jsx(x,{value:"overview",className:"mt-4 p-4 bg-secondary/5 rounded-lg text-secondary",children:t.jsx("p",{children:"View your dashboard overview and key metrics."})}),t.jsx(x,{value:"analytics",className:"mt-4 p-4 bg-secondary/5 rounded-lg text-secondary",children:t.jsx("p",{children:"Detailed analytics and performance metrics."})}),t.jsx(x,{value:"reports",className:"mt-4 p-4 bg-secondary/5 rounded-lg text-secondary",children:t.jsx("p",{children:"Generate and view detailed reports."})})]})},E={args:{defaultValue:"profile",orientation:"horizontal"},render:e=>t.jsxs(R,{...e,children:[t.jsxs(I,{className:e.orientation==="vertical"?"flex flex-col h-auto bg-tertiary/10":"bg-tertiary/10",children:[t.jsx(p,{value:"profile",className:"data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary",children:"Profile"}),t.jsx(p,{value:"notifications",className:"data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary",children:"Notifications"}),t.jsx(p,{value:"security",className:"data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary",children:"Security"})]}),t.jsx(x,{value:"profile",className:"mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary",children:t.jsx("p",{children:"Manage your profile information and preferences."})}),t.jsx(x,{value:"notifications",className:"mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary",children:t.jsx("p",{children:"Configure your notification settings."})}),t.jsx(x,{value:"security",className:"mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary",children:t.jsx("p",{children:"Manage your security settings and preferences."})})]})},A={args:{defaultValue:"active",orientation:"horizontal"},render:e=>t.jsxs(R,{...e,children:[t.jsxs(I,{className:e.orientation==="vertical"?"flex flex-col h-auto bg-info/10":"bg-info/10",children:[t.jsx(p,{value:"active",className:"data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info",children:"Active"}),t.jsx(p,{value:"disabled",disabled:!0,className:"opacity-50",children:"Disabled"}),t.jsx(p,{value:"inactive",className:"data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info",children:"Inactive"})]}),t.jsx(x,{value:"active",className:"mt-4 p-4 bg-info/5 rounded-lg text-info",children:t.jsx("p",{children:"This tab is active and can be selected."})}),t.jsx(x,{value:"disabled",className:"mt-4 p-4 bg-info/5 rounded-lg text-info",children:t.jsx("p",{children:"This tab is disabled and cannot be selected."})}),t.jsx(x,{value:"inactive",className:"mt-4 p-4 bg-info/5 rounded-lg text-info",children:t.jsx("p",{children:"This tab is inactive but can be selected."})})]})};var U,H,Y;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: "account",
    orientation: "horizontal"
  },
  render: args => {
    const isVertical = args.orientation === "vertical";
    return <Tabs {...args}>\r
        <TabsList className={isVertical ? "flex flex-col h-auto bg-tertiary/10" : "bg-primary/10"}>\r
          {tabData.map(tab => <TabsTrigger key={tab.value} value={tab.value}>\r
              {tab.label}\r
            </TabsTrigger>)}\r
        </TabsList>\r
        {tabData.map(tab => <TabsContent key={tab.value} value={tab.value}>\r
            {tab.content}\r
          </TabsContent>)}\r
      </Tabs>;
  }
}`,...(Y=(H=F.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var q,J,Q;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    defaultValue: "overview",
    orientation: "horizontal"
  },
  render: args => <Tabs {...args}>\r
      <TabsList className={args.orientation === "vertical" ? "flex flex-col h-auto bg-secondary/10" : "grid w-full grid-cols-3 bg-secondary/10"}>\r
        <TabsTrigger value="overview" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">\r
          Overview\r
        </TabsTrigger>\r
        <TabsTrigger value="analytics" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">\r
          Analytics\r
        </TabsTrigger>\r
        <TabsTrigger value="reports" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">\r
          Reports\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="overview" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">\r
        <p>View your dashboard overview and key metrics.</p>\r
      </TabsContent>\r
      <TabsContent value="analytics" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">\r
        <p>Detailed analytics and performance metrics.</p>\r
      </TabsContent>\r
      <TabsContent value="reports" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">\r
        <p>Generate and view detailed reports.</p>\r
      </TabsContent>\r
    </Tabs>
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Z;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultValue: "profile",
    orientation: "horizontal"
  },
  render: args => <Tabs {...args}>\r
      <TabsList className={args.orientation === "vertical" ? "flex flex-col h-auto bg-tertiary/10" : "bg-tertiary/10"}>\r
        <TabsTrigger value="profile" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">\r
          Profile\r
        </TabsTrigger>\r
        <TabsTrigger value="notifications" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">\r
          Notifications\r
        </TabsTrigger>\r
        <TabsTrigger value="security" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">\r
          Security\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="profile" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">\r
        <p>Manage your profile information and preferences.</p>\r
      </TabsContent>\r
      <TabsContent value="notifications" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">\r
        <p>Configure your notification settings.</p>\r
      </TabsContent>\r
      <TabsContent value="security" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">\r
        <p>Manage your security settings and preferences.</p>\r
      </TabsContent>\r
    </Tabs>
}`,...(Z=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    defaultValue: "active",
    orientation: "horizontal"
  },
  render: args => <Tabs {...args}>\r
      <TabsList className={args.orientation === "vertical" ? "flex flex-col h-auto bg-info/10" : "bg-info/10"}>\r
        <TabsTrigger value="active" className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info">\r
          Active\r
        </TabsTrigger>\r
        <TabsTrigger value="disabled" disabled className="opacity-50">\r
          Disabled\r
        </TabsTrigger>\r
        <TabsTrigger value="inactive" className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info">\r
          Inactive\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="active" className="mt-4 p-4 bg-info/5 rounded-lg text-info">\r
        <p>This tab is active and can be selected.</p>\r
      </TabsContent>\r
      <TabsContent value="disabled" className="mt-4 p-4 bg-info/5 rounded-lg text-info">\r
        <p>This tab is disabled and cannot be selected.</p>\r
      </TabsContent>\r
      <TabsContent value="inactive" className="mt-4 p-4 bg-info/5 rounded-lg text-info">\r
        <p>This tab is inactive but can be selected.</p>\r
      </TabsContent>\r
    </Tabs>
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const lt=["Playground","GridTabs","VerticalTabs","DisabledTabs"];export{A as DisabledTabs,_ as GridTabs,F as Playground,E as VerticalTabs,lt as __namedExportsOrder,ct as default};
