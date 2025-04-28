import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{a as Z,c}from"./utils-jM7Hu9J5.js";import{S as ee}from"./index-LOOTFJQl.js";import{c as E}from"./createLucideIcon-CL9dHywW.js";/* empty css              *//**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=E("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=E("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=E("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),_=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,M=Z,re=(e,t)=>r=>{var a;if((t==null?void 0:t.variants)==null)return M(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:i,defaultVariants:o}=t,C=Object.keys(i).map(g=>{const f=r==null?void 0:r[g],y=o==null?void 0:o[g];if(f===null)return null;const h=_(f)||_(y);return i[g][h]}),D=r&&Object.entries(r).reduce((g,f)=>{let[y,h]=f;return h===void 0||(g[y]=h),g},{}),Q=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((g,f)=>{let{class:y,className:h,...X}=f;return Object.entries(X).every(Y=>{let[w,I]=Y;return Array.isArray(I)?I.includes({...o,...D}[w]):{...o,...D}[w]===I})?[...g,y,h]:g},[]);return M(e,C,Q,r==null?void 0:r.class,r==null?void 0:r.className)},F=re("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),H=l.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},o)=>{const C=a?ee:"button";return n.jsx(C,{className:c(F({variant:t,size:r,className:e})),ref:o,...i})});H.displayName="Button";H.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const u=({className:e,...t})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:c("mx-auto flex w-full justify-center",e),...t});u.displayName="Pagination";const d=l.forwardRef(({className:e,...t},r)=>n.jsx("ul",{ref:r,className:c("flex flex-row items-center gap-1",e),...t}));d.displayName="PaginationContent";const s=l.forwardRef(({className:e,...t},r)=>n.jsx("li",{ref:r,className:c("",e),...t}));s.displayName="PaginationItem";const m=({className:e,isActive:t,size:r="icon",...a})=>n.jsx("a",{"aria-current":t?"page":void 0,className:c(F({variant:t?"outline":"ghost",size:r}),e),...a});m.displayName="PaginationLink";const p=({className:e,...t})=>n.jsxs(m,{"aria-label":"Go to previous page",size:"default",className:c("gap-1 pl-2.5",e),...t,children:[n.jsx(ae,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});p.displayName="PaginationPrevious";const P=({className:e,...t})=>n.jsxs(m,{"aria-label":"Go to next page",size:"default",className:c("gap-1 pr-2.5",e),...t,children:[n.jsx("span",{children:"Next"}),n.jsx(ne,{className:"h-4 w-4"})]});P.displayName="PaginationNext";const k=({className:e,...t})=>n.jsxs("span",{"aria-hidden":!0,className:c("flex h-9 w-9 items-center justify-center",e),...t,children:[n.jsx(te,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});k.displayName="PaginationEllipsis";u.__docgenInfo={description:"",methods:[],displayName:"Pagination"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};k.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};s.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};P.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const ue={title:"Components/Pagination",component:u,tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"Current active page",table:{type:{summary:"number"},defaultValue:{summary:1}}},totalPages:{control:{type:"number",min:1},description:"Total number of pages",table:{type:{summary:"number"},defaultValue:{summary:5}}},showEllipsis:{control:"boolean",description:"Show ellipsis for long page ranges",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},custom:{control:"boolean",description:"Use custom styling",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}};function J(e,t,r){if(!r||t<=5)return Array.from({length:t},(i,o)=>o+1);const a=[1];e>3&&a.push("ellipsis1");for(let i=Math.max(2,e-1);i<=Math.min(t-1,e+1);i++)a.push(i);return e<t-2&&a.push("ellipsis2"),a.push(t),a}const x={args:{currentPage:1,totalPages:5,showEllipsis:!0,custom:!1},render:e=>{const[t,r]=l.useState(e.currentPage);return l.useEffect(()=>{r(e.currentPage)},[e.currentPage]),n.jsx(u,{children:n.jsxs(d,{className:e.custom?"gap-2":void 0,children:[n.jsx(s,{children:n.jsx(p,{href:"#",disabled:t===1,onClick:a=>{a.preventDefault(),r(i=>Math.max(1,i-1))},className:e.custom?"bg-primary/10 text-primary hover:bg-primary/20":void 0})}),J(t,e.totalPages,e.showEllipsis).map((a,i)=>typeof a=="string"?n.jsx(s,{children:n.jsx(k,{})},a+i):n.jsx(s,{children:n.jsx(m,{href:"#",isActive:t===a,onClick:o=>{o.preventDefault(),r(a)},className:e.custom?t===a?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20":void 0,children:a})},a)),n.jsx(s,{children:n.jsx(P,{href:"#",disabled:t===e.totalPages,onClick:a=>{a.preventDefault(),r(i=>Math.min(e.totalPages,i+1))},className:e.custom?"bg-primary/10 text-primary hover:bg-primary/20":void 0})})]})})}},v={args:{currentPage:5,totalPages:20,showEllipsis:!0,custom:!0},render:e=>{const[t,r]=l.useState(e.currentPage);return l.useEffect(()=>{r(e.currentPage)},[e.currentPage]),n.jsx(u,{children:n.jsxs(d,{children:[n.jsx(s,{children:n.jsx(p,{href:"#",disabled:t===1,onClick:a=>{a.preventDefault(),r(i=>Math.max(1,i-1))}})}),J(t,e.totalPages,e.showEllipsis).map((a,i)=>typeof a=="string"?n.jsx(s,{children:n.jsx(k,{})},a+i):n.jsx(s,{children:n.jsx(m,{href:"#",isActive:t===a,onClick:o=>{o.preventDefault(),r(a)},children:a})},a)),n.jsx(s,{children:n.jsx(P,{href:"#",disabled:t===e.totalPages,onClick:a=>{a.preventDefault(),r(i=>Math.min(e.totalPages,i+1))}})})]})})}},b={args:{currentPage:1,totalPages:1},render:e=>{const[t,r]=l.useState(e.currentPage);return l.useEffect(()=>{r(e.currentPage)},[e.currentPage]),n.jsx(u,{children:n.jsxs(d,{children:[n.jsx(s,{children:n.jsx(p,{href:"#",disabled:t===1,onClick:a=>{a.preventDefault(),r(i=>Math.max(1,i-1))}})}),n.jsx(s,{children:n.jsx(P,{href:"#",disabled:t===e.totalPages,onClick:a=>{a.preventDefault(),r(i=>Math.min(e.totalPages,i+1))}})})]})})}},j={args:{currentPage:1,totalPages:30,showEllipsis:!0},render:e=>{const[t,r]=l.useState(e.currentPage);return l.useEffect(()=>{r(e.currentPage)},[e.currentPage]),n.jsx(u,{children:n.jsxs(d,{children:[n.jsx(s,{children:n.jsx(p,{href:"#",disabled:t===1,onClick:a=>{a.preventDefault(),r(i=>Math.max(1,i-1))}})}),[1,2,3].map(a=>n.jsx(s,{children:n.jsx(m,{href:"#",isActive:t===a,onClick:i=>{i.preventDefault(),r(a)},children:a})},a)),n.jsx(s,{children:n.jsx(P,{href:"#",disabled:t===e.totalPages,onClick:a=>{a.preventDefault(),r(i=>Math.min(e.totalPages,i+1))}})})]})})}},N={args:{currentPage:2,totalPages:3,custom:!0},render:e=>{const[t,r]=l.useState(e.currentPage);return l.useEffect(()=>{r(e.currentPage)},[e.currentPage]),n.jsx(u,{children:n.jsxs(d,{className:"gap-2",children:[n.jsx(s,{children:n.jsx(p,{href:"#",disabled:t===1,onClick:a=>{a.preventDefault(),r(i=>Math.max(1,i-1))},className:"bg-primary/10 text-primary hover:bg-primary/20"})}),[1,2,3].map(a=>n.jsx(s,{children:n.jsx(m,{href:"#",isActive:t===a,onClick:i=>{i.preventDefault(),r(a)},className:t===a?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20",children:a})},a)),n.jsx(s,{children:n.jsx(P,{href:"#",disabled:t===e.totalPages,onClick:a=>{a.preventDefault(),r(i=>Math.min(e.totalPages,i+1))},className:"bg-primary/10 text-primary hover:bg-primary/20"})})]})})}};var S,V,L;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    showEllipsis: true,
    custom: false
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return <Pagination>\r
        <PaginationContent className={args.custom ? "gap-2" : undefined}>\r
          <PaginationItem>\r
            <PaginationPrevious href="#" disabled={page === 1} onClick={e => {
            e.preventDefault();
            setPage(p => Math.max(1, p - 1));
          }} className={args.custom ? "bg-primary/10 text-primary hover:bg-primary/20" : undefined} />\r
          </PaginationItem>\r
          {getPages(page, args.totalPages, args.showEllipsis).map((p, idx) => typeof p === "string" ? <PaginationItem key={p + idx}>\r
                <PaginationEllipsis />\r
              </PaginationItem> : <PaginationItem key={p}>\r
                <PaginationLink href="#" isActive={page === p} onClick={e => {
            e.preventDefault();
            setPage(p);
          }} className={args.custom ? page === p ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary hover:bg-primary/20" : undefined}>\r
                  {p}\r
                </PaginationLink>\r
              </PaginationItem>)}\r
          <PaginationItem>\r
            <PaginationNext href="#" disabled={page === args.totalPages} onClick={e => {
            e.preventDefault();
            setPage(p => Math.min(args.totalPages, p + 1));
          }} className={args.custom ? "bg-primary/10 text-primary hover:bg-primary/20" : undefined} />\r
          </PaginationItem>\r
        </PaginationContent>\r
      </Pagination>;
  }
}`,...(L=(V=x.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var A,z,O;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    showEllipsis: true,
    custom: true
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return <Pagination>\r
        <PaginationContent>\r
          <PaginationItem>\r
            <PaginationPrevious href="#" disabled={page === 1} onClick={e => {
            e.preventDefault();
            setPage(p => Math.max(1, p - 1));
          }} />\r
          </PaginationItem>\r
          {getPages(page, args.totalPages, args.showEllipsis).map((p, idx) => typeof p === "string" ? <PaginationItem key={p + idx}>\r
                <PaginationEllipsis />\r
              </PaginationItem> : <PaginationItem key={p}>\r
                <PaginationLink href="#" isActive={page === p} onClick={e => {
            e.preventDefault();
            setPage(p);
          }}>\r
                  {p}\r
                </PaginationLink>\r
              </PaginationItem>)}\r
          <PaginationItem>\r
            <PaginationNext href="#" disabled={page === args.totalPages} onClick={e => {
            e.preventDefault();
            setPage(p => Math.min(args.totalPages, p + 1));
          }} />\r
          </PaginationItem>\r
        </PaginationContent>\r
      </Pagination>;
  }
}`,...(O=(z=v.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,T,q;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 1
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return <Pagination>\r
        <PaginationContent>\r
          <PaginationItem>\r
            <PaginationPrevious href="#" disabled={page === 1} onClick={e => {
            e.preventDefault();
            setPage(p => Math.max(1, p - 1));
          }} />\r
          </PaginationItem>\r
          <PaginationItem>\r
            <PaginationNext href="#" disabled={page === args.totalPages} onClick={e => {
            e.preventDefault();
            setPage(p => Math.min(args.totalPages, p + 1));
          }} />\r
          </PaginationItem>\r
        </PaginationContent>\r
      </Pagination>;
  }
}`,...(q=(T=b.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,G,U;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 30,
    showEllipsis: true
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return <Pagination>\r
        <PaginationContent>\r
          <PaginationItem>\r
            <PaginationPrevious href="#" disabled={page === 1} onClick={e => {
            e.preventDefault();
            setPage(p => Math.max(1, p - 1));
          }} />\r
          </PaginationItem>\r
          {[1, 2, 3].map(p => <PaginationItem key={p}>\r
              <PaginationLink href="#" isActive={page === p} onClick={e => {
            e.preventDefault();
            setPage(p);
          }}>\r
                {p}\r
              </PaginationLink>\r
            </PaginationItem>)}\r
          <PaginationItem>\r
            <PaginationNext href="#" disabled={page === args.totalPages} onClick={e => {
            e.preventDefault();
            setPage(p => Math.min(args.totalPages, p + 1));
          }} />\r
          </PaginationItem>\r
        </PaginationContent>\r
      </Pagination>;
  }
}`,...(U=(G=j.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var $,K,W;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 3,
    custom: true
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return <Pagination>\r
        <PaginationContent className="gap-2">\r
          <PaginationItem>\r
            <PaginationPrevious href="#" disabled={page === 1} onClick={e => {
            e.preventDefault();
            setPage(p => Math.max(1, p - 1));
          }} className="bg-primary/10 text-primary hover:bg-primary/20" />\r
          </PaginationItem>\r
          {[1, 2, 3].map(p => <PaginationItem key={p}>\r
              <PaginationLink href="#" isActive={page === p} onClick={e => {
            e.preventDefault();
            setPage(p);
          }} className={page === p ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary hover:bg-primary/20"}>\r
                {p}\r
              </PaginationLink>\r
            </PaginationItem>)}\r
          <PaginationItem>\r
            <PaginationNext href="#" disabled={page === args.totalPages} onClick={e => {
            e.preventDefault();
            setPage(p => Math.min(args.totalPages, p + 1));
          }} className="bg-primary/10 text-primary hover:bg-primary/20" />\r
          </PaginationItem>\r
        </PaginationContent>\r
      </Pagination>;
  }
}`,...(W=(K=N.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const me=["Playground","Ellipsis","IconsOnly","Disabled","Custom"];export{N as Custom,j as Disabled,v as Ellipsis,b as IconsOnly,x as Playground,me as __namedExportsOrder,ue as default};
