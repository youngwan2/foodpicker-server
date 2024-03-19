import{j as e,r as a,e as u,k as x,b as p,L as h,l as g,m as f,R as N,n as b,G as y}from"./index-B8kdr1CY.js";import{s as m}from"./RecipeNutrition.module-CY2PGmtn.js";const A="_recipe_detail_1acui_2",v="_recipe_contents_1acui_8",I="_recipe_top_contents_1acui_20",P="_recipe_main_image_1acui_26",C="_recipe_meta_1acui_33",M="_recipe_tags_1acui_43",R="_middle_line_1acui_57",S="_recipe_bottom_contents_1acui_63",T="_pagination_article_1acui_92",E="_light_1acui_1",F="_btn_icons_left_1acui_143",k="_btn_icons_right_1acui_152",r={recipe_detail:A,recipe_contents:v,recipe_top_contents:I,recipe_main_image:P,recipe_meta:C,recipe_tags:M,middle_line:R,recipe_bottom_contents:S,pagination_article:T,light:E,btn_icons_left:F,btn_icons_right:k};function L({recipe:s,modalState:n}){const{INFO_CAR:t,INFO_ENG:_,INFO_FAT:c,INFO_PRO:i,INFO_NA:l,INFO_WGT:d}=s;return s?e.jsxs("article",{className:m.modal_con,style:n?{visibility:"visible",opacity:1}:{visibility:"hidden",opacity:0,transform:"translate(500px,-50%)"},children:[e.jsx("h3",{style:{textAlign:"center"},children:"영양성분표"}),e.jsx("hr",{}),e.jsxs("ul",{children:[e.jsxs("li",{children:["ㅇ ",e.jsx("strong",{children:"열량(kcal)"}),_]}),e.jsxs("li",{children:["ㅇ ",e.jsx("strong",{children:"탄수화물(g)"}),t]}),e.jsxs("li",{children:["ㅇ ",e.jsx("strong",{children:"단백질(g)"}),i]}),e.jsxs("li",{children:["ㅇ ",e.jsx("strong",{children:"지방(g)"}),c]}),e.jsxs("li",{children:["ㅇ ",e.jsx("strong",{children:"나트륨(mg)"}),l]})]})]}):e.jsx(e.Fragment,{})}function O({recipe:s}){const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:m.modal_btn,onClick:()=>{t(!n)},children:n?"닫기":"영양성분표"}),e.jsx(L,{recipe:s,modalState:n})]})}function $(s){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"},child:[]}]})(s)}function G(s){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"},child:[]}]})(s)}function H({param:s}){const n=x(o=>o.recipe.value),t=n.findIndex(o=>o.RCP_SEQ===s),_=n.length-1,c=n[t-1],i=n[t+1],l=a.useRef(null),{isEnd:d}=p(l);function j(o){l.current&&(o?l.current.style.cssText=`
    opacity:1;
    visibility: visible;
    transform:translate(0,0);
 `:l.current.style.cssText=`
      opacity:0;
      visibility: hidden;
      transform:translate(0,-50px);
   `)}return a.useEffect(()=>{d&&j(!0)},[d]),e.jsxs("article",{className:r.pagination_article,ref:l,children:[e.jsx("button",{style:t<=0?{visibility:"hidden",opacity:0}:{visibility:"visible",opacity:1},children:e.jsxs(h,{to:`/recipe/${c==null?void 0:c.RCP_SEQ}`,children:[e.jsx("h4",{style:{background:`url(${c==null?void 0:c.ATT_FILE_NO_MAIN})`},children:(c==null?void 0:c.RCP_NM)||"아이템이 존재하지 않습니다"}),e.jsx("span",{className:r.btn_icons_left,children:e.jsx($,{})})]})}),e.jsx("button",{style:t===_?{visibility:"hidden",opacity:0}:{visibility:"visible",opacity:1},children:e.jsxs(h,{to:`/recipe/${i==null?void 0:i.RCP_SEQ}`,children:[e.jsx("h4",{style:{background:`url(${i==null?void 0:i.ATT_FILE_NO_MAIN})`},children:(i==null?void 0:i.RCP_NM)||"아이템이 존재하지 않습니다."}),e.jsx("span",{className:r.btn_icons_right,children:e.jsx(G,{})})]})})]})}function w({recipe:s}){return e.jsxs("article",{className:r.recipe_contents,children:[e.jsx("h2",{className:r.page_title,children:s.RCP_NM}),e.jsxs("article",{className:r.recipe_top_contents,children:[e.jsx("img",{src:s.ATT_FILE_NO_MAIN||"/images/background.png",alt:"메인이미지",className:r.recipe_main_image}),e.jsxs("ul",{className:r.recipe_meta,children:[e.jsxs("li",{className:r.recipe_tags,children:[e.jsx("h3",{children:"조리방법/요리종류/키워드"}),e.jsx("span",{children:s.RCP_WAY2||"방법"}),e.jsx("span",{children:s.RCP_PAT2||"종류"}),s.HASH_TAG?e.jsx("span",{children:s.HASH_TAG}):null]}),e.jsxs("li",{children:[e.jsx("h3",{children:"재료"}),e.jsx("span",{children:s.RCP_PARTS_DTLS})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"저감 조리법 TIP"}),e.jsx("span",{children:s.RCP_NA_TIP})]})]})]}),e.jsx("div",{className:r.middle_line}),e.jsxs("article",{className:r.recipe_bottom_contents,children:[e.jsx("h3",{children:"조리법"}),[...Array(8)].map((n,t)=>e.jsxs("figure",{style:s[`MANUAL0${t+1}`]===""||s===void 0?{display:"none"}:{display:"block"},children:[e.jsx("img",{src:s[`MANUAL_IMG0${t+1}`],alt:`만드는법${t+1}`}),e.jsx("p",{children:s[`MANUAL0${t+1}`]})]},t))]})]})}function B(){const s=a.useRef(null),n=g(),[t,_]=a.useState(),c=x(i=>(sessionStorage.setItem("recipe",JSON.stringify({recipes:i.recipe.value})),i.recipe)).value.filter(i=>i.RCP_SEQ===n.id);return f(),a.useEffect(()=>{document.title="레시피 상세조회 | FoodPicker"},[]),a.useEffect(()=>{_(c[0])},[n]),a.useEffect(()=>{s.current&&s.current.scrollIntoView({block:"start"})},[]),t?e.jsxs("section",{className:r.recipe_detail,ref:s,children:[e.jsx(b,{}),e.jsx(y,{path:"/recipe",mainName:"조회서비스",subName:"음식레시피",finalPathName:t.RCP_NM}),e.jsx(w,{recipe:t}),e.jsx(O,{recipe:t}),e.jsx(H,{param:n.id})]}):e.jsx(N,{})}export{B as default};
