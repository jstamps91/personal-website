"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[864],{5212:function(e,t,n){var a=n(5444),i=n(2359),o=n(7294),r=n(9),s=n(1984);const l=(0,r.ZP)(a.Link).withConfig({displayName:"Card__Container",componentId:"sc-15boh00-0"})(["& > div{display:flex;align-items:center;text-align:left;flex-direction:column;border-bottom:1px solid rgb(221,221,221);padding:2rem 0px;"," *{margin:0;}}&:first-child{& > div{border-top:1px solid rgb(221,221,221);}}text-decoration:none;"],s.BC.md`
      flex-direction: row;
    `),m=r.ZP.div.withConfig({displayName:"Card__ImageWrapper",componentId:"sc-15boh00-1"})(["border-radius:4px;overflow:hidden;width:100%;max-width:500px;",";"],s.BC.md`
    width: 25%;
  `),c=r.ZP.div.withConfig({displayName:"Card__Info",componentId:"sc-15boh00-2"})(["width:100%;max-width:560px;padding-top:12px;",";"],s.BC.md`
    padding: 0 0 0 50px;
    width: 75%;
    max-width: 100%;
  `),p=r.ZP.h3.withConfig({displayName:"Card__Title",componentId:"sc-15boh00-3"})(["font-family:'Open Sans',sans-serif;color:#282a2d;transition:0.3s;font-size:17px;"," ",":hover &{color:#1976d2;}"],s.BC.sm`
    font-size: 1.1rem;
  `,l),d=r.ZP.p.withConfig({displayName:"Card__Time",componentId:"sc-15boh00-4"})(["color:#757575;font-size:14px;text-align:right;padding:6px 6px 6px;"]),g=r.ZP.p.withConfig({displayName:"Card__Excerpt",componentId:"sc-15boh00-5"})(["color:#757575;font-size:15px;",";"],s.BC.sm`
    font-size: 0.9rem;
  `);t.Z=e=>o.createElement(l,{to:e.data.path},o.createElement("div",null,o.createElement(m,null,o.createElement(i.G,{alt:`${e.data.title} image`,image:e.data.thumbnail})),o.createElement(c,null,o.createElement(p,null,e.data.title),o.createElement(d,null,o.createElement("time",{dateTime:"2008-02-14 20:00"},e.data.date," "),"· ",e.data.timeToRead," min read"),o.createElement(g,null,e.data.excerpt))))},3809:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1721),i=n(7294),o=n(5414),r=n.p+"static/logo-4f6ab1127a54ca4527a23d2f7538cb98.png";let s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){const{image:e,url:t,description:n,isPost:a}=this.props,r=(""===this.props.title?"":`${this.props.title} · `)+"Joshua Stamps",s=[{"@context":"http://schema.org","@type":"WebSite",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/u/0/101542534057875808813","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],url:t,name:r,alternateName:n}];return a&&s.push([{"@context":"http://schema.org","@type":"BreadcrumbList",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/u/0/101542534057875808813","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:r,image:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],url:t,name:r,alternateName:`${t} | Joshua Stamps`,headline:r,image:{"@type":"ImageObject",url:e},description:n}]),i.createElement(o.Z,null,i.createElement("title",null,r),i.createElement("meta",{name:"description",content:n}),i.createElement("meta",{name:"image",content:e}),i.createElement("script",{type:"application/ld+json"},JSON.stringify(s)),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("meta",{name:"twitter:site",content:"@stamps_dev"}),i.createElement("meta",{name:"twitter:creator",content:"@stamps_dev"}),i.createElement("meta",{name:"twitter:title",content:r}),i.createElement("meta",{name:"twitter:description",content:n}),i.createElement("meta",{name:"twitter:image",content:e}))},t}(i.PureComponent);s.defaultProps={title:"Joshua Stamps",image:`https://jstamps.dev${r}`,url:"https://jstamps.dev/",description:"Joshua Stamps - Software Engineer",isPost:!1}},5531:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(7294),i=n(9),o=n(5212),r=n(476),s=n(4925),l=n(5785);var m=n(5444);const c=(0,i.ZP)(m.Link).withConfig({displayName:"PaginationItem__ButtonPage",componentId:"sc-1lqaa2-0"})(["width:36px;height:36px;color:#4d4d4d;display:flex;align-items:center;justify-content:center;text-decoration:none;font-weight:bold;font-size:16px;transition:0.3s;border-radius:50%;&:hover{background:#91caf75e;}",";span{line-height:14px;position:relative;}"],(e=>e.selected&&(0,i.iv)(["&&{background:#3f86f5;color:white;}"])));function p({selected:e,index:t}){return a.createElement("div",null,a.createElement(c,{selected:e,to:"/blog"+(t?`/page/${t}`:""),disabled:e},a.createElement("span",null,t)))}const d=a.memo((function(){return a.createElement(g,null,a.createElement(h,{alt:"ellipsis",src:"https://icongr.am/clarity/ellipsis-horizontal.svg?size=16&color=4d4d4d"}))}));var g=(0,i.ZP)("div").withConfig({displayName:"PaginationSeparator___StyledDiv",componentId:"sc-12r7502-0"})(["display:flex;width:16px;height:36px;margin:0;align-items:center;justify-content:center;"]),h=(0,i.ZP)("img").withConfig({displayName:"PaginationSeparator___StyledImg",componentId:"sc-12r7502-1"})(["margin:0;top:5px;position:relative;"]);const u="https://icongr.am/clarity/arrow.svg?size=24&color=bebebe",f=(0,i.ZP)(m.Link).withConfig({displayName:"ButtonNextPrev__Button",componentId:"sc-1f9wq5l-0"})(["text-decoration:none;display:flex;margin:0 20px;transition:0.3s;visibility:",";p{font-weight:bold;margin:0;color:#4d4d4d;}img{transition:0.4s;transform:rotate(",");margin:0 3px;}&:hover{img{transform:rotate(",") translateY(-3px);}}"],(e=>e.hide?"hidden":"inherit"),(e=>"true"===e.isnext?"90deg":"-90deg"),(e=>"true"===e.isnext?"90deg":"-90deg"));var x=({isnext:e=!0,toIndex:t,hide:n})=>a.createElement(f,{isnext:e.toString(),hide:n?1:0,to:"/blog"+(t?`/page/${t}`:"")},!e&&a.createElement("img",{alt:"Prev Page",src:u}),a.createElement("p",null,e?"NEXT":"PREV"),e&&a.createElement("img",{alt:"Next Page",src:u}));const w=["pages","selected","onChange","touchMode","hasNextPage","hasPrevPage"];const v=a.memo((function(e){let{pages:t,selected:n,onChange:i,touchMode:o,hasNextPage:r,hasPrevPage:m}=e,c=(0,s.Z)(e,w);const g=function(e,t){const n=(0,l.Z)(Array(e)).map(((e,t)=>t));if(n.length<6)return n;const a=n.length-1,i=Math.min(n.length,Math.max(0,t-1)),o=Math.min(n.length,Math.max(0,t+1)),r=[];return r.push.apply(r,(0,l.Z)(n.slice(i,o+1))),t===a&&r.unshift(a-2),0===t&&r.push(2),i>1&&r.unshift(-1),o<a-1&&r.push(-1),i>=1&&r.unshift(n[0]),o<=a-1&&r.push(n[n.length-1]),r}(t,n);return a.createElement(y,Object.assign({},c,{$_css:16}),a.createElement(x,{hide:!m,toIndex:n-1,isnext:!1}),a.createElement(b,null,g.map(((e,t)=>-1===e?a.createElement(d,{key:`separator-${t}`}):a.createElement(p,{key:e,index:e,selected:n===e,onChange:i,touchMode:o})))),a.createElement(x,{hide:!r,toIndex:n+1,isnext:!0}))}));var y=(0,i.ZP)("div").withConfig({displayName:"Pagination___StyledDiv",componentId:"sc-1waprzj-0"})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding:","px 0;"],(e=>e.$_css)),b=(0,i.ZP)("div").withConfig({displayName:"Pagination___StyledDiv2",componentId:"sc-1waprzj-1"})(["display:flex;align-items:center;justify-content:center;& > div + div{margin:0 3px;}"]),E=v,P=n(3809),_=n(9155);const C=i.ZP.div.withConfig({displayName:"BlogListTemplate__PostsWrapper",componentId:"sc-1rzoqz5-0"})(["padding:0 15px;max-width:800px;margin:0 auto 35px;"]);var I=function(e){const t=e.data.allMdx.edges||[],n=e.data.site.siteMetadata.siteUrl,{currentPage:i,numPages:s,hasNextPage:l,hasPrevPage:m}=e.pageContext;return a.createElement(r.Z,{location:e.location,active:_.L.blog},a.createElement("div",{className:"Blog",style:{marginTop:90}},a.createElement(P.Z,{title:"Blog",url:`${n}/blog`}),a.createElement(C,null,t.map((({node:e},t)=>(console.log(e.frontmatter),!!e.frontmatter.published&&a.createElement(o.Z,{data:{title:e.frontmatter.title,thumbnail:e.frontmatter.image.childImageSharp.gatsbyImageData,excerpt:e.frontmatter.description||e.excerpt,date:e.frontmatter.date,path:`/${e.fields.slug}`},key:t})))),a.createElement(E,{pages:s,selected:i,hasNextPage:l,hasPrevPage:m}))))}},9155:function(e,t,n){n.d(t,{L:function(){return a},B:function(){return i}});const a={home:"",blog:"Blog",about:"About",portfolio:"Portfolio",contact:"Contact"},i=e=>{for(const t of e)if(!t.includes(" "))return t;return e[0]}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-tsx-865a2c052f0ec123d4f9.js.map