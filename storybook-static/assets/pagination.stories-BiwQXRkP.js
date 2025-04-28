import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as P}from"./index-DRjF_FHU.js";import{a as o}from"./index-D7LsABKM.js";import{b as u}from"./button-DoxJ_hUm.js";import{c as f}from"./createLucideIcon-CL9dHywW.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=f("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=f("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),c=({className:i,...a})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",i),...a});c.displayName="Pagination";const l=P.forwardRef(({className:i,...a},s)=>n.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",i),...a}));l.displayName="PaginationContent";const e=P.forwardRef(({className:i,...a},s)=>n.jsx("li",{ref:s,className:o("",i),...a}));e.displayName="PaginationItem";const t=({className:i,isActive:a,size:s="icon",...x})=>n.jsx("a",{"aria-current":a?"page":void 0,className:o(u({variant:a?"outline":"ghost",size:s}),i),...x});t.displayName="PaginationLink";const d=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",i),...a,children:[n.jsx(N,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});d.displayName="PaginationPrevious";const m=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",i),...a,children:[n.jsx("span",{children:"Next"}),n.jsx(j,{className:"h-4 w-4"})]});m.displayName="PaginationNext";c.__docgenInfo={description:"",methods:[],displayName:"Pagination"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const k={title:"Components/Pagination",component:c,argTypes:{children:{control:!1}}},r={args:{children:n.jsxs(l,{children:[n.jsx(e,{children:n.jsx(d,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(m,{href:"#"})})]})}};var g,p,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,k as default};
