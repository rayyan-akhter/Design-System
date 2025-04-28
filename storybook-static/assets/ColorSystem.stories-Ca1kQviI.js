import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as o}from"./utils-jM7Hu9J5.js";import{r as n}from"./index-DRjF_FHU.js";/* empty css              */const u=n.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r}));u.displayName="Card";const y=n.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("flex flex-col space-y-1.5 p-6",a),...r}));y.displayName="CardHeader";const h=n.forwardRef(({className:a,...r},s)=>e.jsx("h3",{ref:s,className:o("text-2xl font-semibold leading-none tracking-tight",a),...r}));h.displayName="CardTitle";const p=n.forwardRef(({className:a,...r},s)=>e.jsx("p",{ref:s,className:o("text-sm text-muted-foreground",a),...r}));p.displayName="CardDescription";const v=n.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("p-6 pt-0",a),...r}));v.displayName="CardContent";const _=n.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("flex items-center p-6 pt-0",a),...r}));_.displayName="CardFooter";u.__docgenInfo={description:"",methods:[],displayName:"Card"};y.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};_.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};h.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};v.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const V=({className:a,showHex:r=!1,showLabels:s=!0,showPrimary:L=!0,showSecondary:I=!0,showTertiary:q=!0,showSemantic:R=!0,colorCardHeight:D=96})=>{const E=[{title:"Primary Colors",colors:[{name:"Primary",value:"hsl(var(--primary))",text:"hsl(var(--primary-foreground))"},{name:"Primary 50",value:"hsl(var(--primary-50))"},{name:"Primary 100",value:"hsl(var(--primary-100))"},{name:"Primary 200",value:"hsl(var(--primary-200))"},{name:"Primary 300",value:"hsl(var(--primary-300))"},{name:"Primary 400",value:"hsl(var(--primary-400))"},{name:"Primary 500",value:"hsl(var(--primary-500))"},{name:"Primary 600",value:"hsl(var(--primary-600))"},{name:"Primary 700",value:"hsl(var(--primary-700))"},{name:"Primary 800",value:"hsl(var(--primary-800))"},{name:"Primary 900",value:"hsl(var(--primary-900))"},{name:"Primary 950",value:"hsl(var(--primary-950))"}],show:L},{title:"Secondary Colors",colors:[{name:"Secondary",value:"hsl(var(--secondary))",text:"hsl(var(--secondary-foreground))"},{name:"Secondary 50",value:"hsl(var(--secondary-50))"},{name:"Secondary 100",value:"hsl(var(--secondary-100))"},{name:"Secondary 200",value:"hsl(var(--secondary-200))"},{name:"Secondary 300",value:"hsl(var(--secondary-300))"},{name:"Secondary 400",value:"hsl(var(--secondary-400))"},{name:"Secondary 500",value:"hsl(var(--secondary-500))"},{name:"Secondary 600",value:"hsl(var(--secondary-600))"},{name:"Secondary 700",value:"hsl(var(--secondary-700))"},{name:"Secondary 800",value:"hsl(var(--secondary-800))"},{name:"Secondary 900",value:"hsl(var(--secondary-900))"},{name:"Secondary 950",value:"hsl(var(--secondary-950))"}],show:I},{title:"Tertiary Colors",colors:[{name:"Tertiary",value:"hsl(var(--tertiary))",text:"hsl(var(--tertiary-foreground))"},{name:"Tertiary 50",value:"hsl(var(--tertiary-50))"},{name:"Tertiary 100",value:"hsl(var(--tertiary-100))"},{name:"Tertiary 200",value:"hsl(var(--tertiary-200))"},{name:"Tertiary 300",value:"hsl(var(--tertiary-300))"},{name:"Tertiary 400",value:"hsl(var(--tertiary-400))"},{name:"Tertiary 500",value:"hsl(var(--tertiary-500))"},{name:"Tertiary 600",value:"hsl(var(--tertiary-600))"},{name:"Tertiary 700",value:"hsl(var(--tertiary-700))"},{name:"Tertiary 800",value:"hsl(var(--tertiary-800))"},{name:"Tertiary 900",value:"hsl(var(--tertiary-900))"},{name:"Tertiary 950",value:"hsl(var(--tertiary-950))"}],show:q},{title:"Semantic Colors",colors:[{name:"Success",value:"hsl(var(--success))",text:"hsl(var(--success-foreground))"},{name:"Warning",value:"hsl(var(--warning))",text:"hsl(var(--warning-foreground))"},{name:"Error",value:"hsl(var(--error))",text:"hsl(var(--error-foreground))"},{name:"Info",value:"hsl(var(--info))",text:"hsl(var(--info-foreground))"}],show:R}];return e.jsxs("div",{className:o("container mx-auto px-4 py-8",a),children:[e.jsx("h1",{className:"text-3xl font-bold mb-8 text-primary",children:"Color System"}),e.jsx("div",{className:"space-y-8",children:E.filter(t=>t.show).map(t=>e.jsxs(u,{className:"border-primary/20 shadow-lg",children:[e.jsxs(y,{className:"bg-primary/5",children:[e.jsx(h,{className:"text-primary",children:t.title}),e.jsxs(p,{children:["Color palette for ",t.title.toLowerCase()]})]}),e.jsx(v,{className:"pt-6",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:t.colors.map(l=>e.jsxs("div",{className:"flex flex-col rounded-lg overflow-hidden border border-border",children:[e.jsx("div",{className:"w-full",style:{backgroundColor:l.value,height:`${D}px`}}),e.jsxs("div",{className:"p-4 bg-background",children:[e.jsx("p",{className:"font-medium text-foreground",children:l.name}),r&&e.jsx("p",{className:"text-sm text-muted-foreground",children:l.value}),l.text&&r&&e.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:["Text: ",l.text]})]})]},l.name))})})]},t.title))})]})};V.__docgenInfo={description:"",methods:[],displayName:"ColorSystem",props:{className:{required:!1,tsType:{name:"string"},description:""},showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPrimary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSecondary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTertiary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSemantic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},colorCardHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"96",computed:!1}}}};const W={title:"Design System/Color System",component:V,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
The Color System component provides a comprehensive view of the design system's color palette.
It includes:

- Primary Colors: The main brand colors with their various shades
- Secondary Colors: Supporting colors for UI elements
- Tertiary Colors: Additional colors for accents and highlights
- Semantic Colors: Colors used for specific states (success, warning, error, info)

Each color is displayed with its name, HSL value, and a visual representation.
The component is responsive and adapts to different screen sizes.
        `}}},argTypes:{className:{control:"text",description:"Additional CSS classes to apply to the container",table:{type:{summary:"string"}}},showHex:{control:"boolean",description:"Show hex color values",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},showLabels:{control:"boolean",description:"Show color scale labels",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showPrimary:{control:"boolean",description:"Show primary color group",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showSecondary:{control:"boolean",description:"Show secondary color group",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showTertiary:{control:"boolean",description:"Show tertiary color group",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showSemantic:{control:"boolean",description:"Show semantic color group",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},colorCardHeight:{control:{type:"range",min:50,max:200,step:10},description:"Height of color cards in pixels",table:{type:{summary:"number"},defaultValue:{summary:100}}},gridColumns:{control:{type:"select",options:[1,2,3,4]},description:"Number of columns in the color grid",table:{type:{summary:"number"},defaultValue:{summary:4}}}}},i={args:{showHex:!0,showLabels:!1,showPrimary:!0,showSecondary:!0,showTertiary:!0,showSemantic:!0,colorCardHeight:200,gridColumns:4},parameters:{docs:{description:{story:"The default Color System view showing all color groups in a responsive grid layout."}}}},m={args:{className:"max-w-7xl mx-auto",showHex:!1,showLabels:!1,showPrimary:!0,showSecondary:!0,showTertiary:!0,showSemantic:!0,colorCardHeight:190,gridColumns:3},parameters:{docs:{description:{story:"Color System with a custom max-width class and enhanced color display options."}}}},d={args:{showHex:!1,showLabels:!1,showPrimary:!0,showSecondary:!0,showTertiary:!0,showSemantic:!0,colorCardHeight:80,gridColumns:4},parameters:{docs:{description:{story:"A compact view of the Color System with minimal labels and smaller cards."}}}},c={args:{showHex:!0,showLabels:!0,showPrimary:!0,showSecondary:!1,showTertiary:!1,showSemantic:!1,colorCardHeight:100,gridColumns:4},parameters:{docs:{description:{story:"Color System showing only the primary color group with detailed information."}}}};var f,w,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showHex: true,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 200,
    gridColumns: 4
  },
  parameters: {
    docs: {
      description: {
        story: "The default Color System view showing all color groups in a responsive grid layout."
      }
    }
  }
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var x,C,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    className: "max-w-7xl mx-auto",
    showHex: false,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 190,
    gridColumns: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Color System with a custom max-width class and enhanced color display options."
      }
    }
  }
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,T,N;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showHex: false,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 80,
    gridColumns: 4
  },
  parameters: {
    docs: {
      description: {
        story: "A compact view of the Color System with minimal labels and smaller cards."
      }
    }
  }
}`,...(N=(T=d.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var P,H,j;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showHex: true,
    showLabels: true,
    showPrimary: true,
    showSecondary: false,
    showTertiary: false,
    showSemantic: false,
    colorCardHeight: 100,
    gridColumns: 4
  },
  parameters: {
    docs: {
      description: {
        story: "Color System showing only the primary color group with detailed information."
      }
    }
  }
}`,...(j=(H=c.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const z=["Default","WithCustomClass","Compact","PrimaryOnly"];export{d as Compact,i as Default,c as PrimaryOnly,m as WithCustomClass,z as __namedExportsOrder,W as default};
