"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[657],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(v,r(r({ref:n},s),{},{components:t})):o.createElement(v,r({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8389:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=["components"],c={id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["@open-sauced/conventional-commit"]},l=void 0,p={unversionedId:"maintainers/conventional-commit",id:"maintainers/conventional-commit",isDocsHomePage:!1,title:"@open-sauced/conventional-commit",description:"Description",source:"@site/docs/maintainers/conventional-commit.md",sourceDirName:"maintainers",slug:"/maintainers/conventional-commit",permalink:"/maintainers/conventional-commit",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/maintainers/conventional-commit.md",tags:[],version:"current",lastUpdatedBy:"Divyansh Singh",lastUpdatedAt:1679143788,formattedLastUpdatedAt:"3/18/2023",frontMatter:{id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["@open-sauced/conventional-commit"]},sidebar:"docs",previous:{title:"@open-sauced/check-engines",permalink:"/maintainers/check-engines"},next:{title:"@open-sauced/semantic-release-conventional-config",permalink:"/maintainers/semantic-release"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Advanced usage",id:"advanced-usage",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2},{value:"Contributing",id:"contributing",children:[],level:2}],m={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," package ",(0,a.kt)("inlineCode",{parentName:"p"},"@open-sauced/conventional-commit")," is designed to help users ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"commitizen")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits"),"."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"This package uses the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-cli"},"cz-cli")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-conventional-changelog"},"cz-conventional-changelog"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @open-sauced/conventional-commit\n")),(0,a.kt)("p",null,"Add the verification scripts to your ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"The reason why we provide ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section is for the people using this as a development enhancement, interactive configurations or trimmed dependency trees, where using ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," is preferred over installing all the dependencies at once."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"All you have to do is run the script next to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @open-sauced/conventional-commit\n# or\nnpx conventional-commit\n")),(0,a.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,a.kt)("p",null,"The most common use case for this package is to run it instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," command inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," scripts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"If you want to ensure local-only usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "conventional-commit"\n  }\n}\n')),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"We're always happy to onboard people into open source!"),(0,a.kt)("p",null,"Check out the repository at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/conventional-commit"},"@open-sauced/conventional-commit")," \u2764\ufe0f"))}u.isMDXComponent=!0}}]);