"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[70030],{59238:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return u},default:function(){return p}});var o=t(87462),a=t(63366),i=(t(15007),t(64983)),s=t(91515),l=["components"],u={},r={_frontmatter:u},d=s.Z;function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)(d,(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"flyout-menus"},"Flyout Menus"),(0,i.mdx)("p",null,"A flyout menu in Photoshop is shown when the user clicks on the hamburger icon at the top right of your panel. You can use them to invoke operations that, for one reason or another, you don't want to take up real estate on your panel."),(0,i.mdx)("p",null,"For flexibility, flyout menus are defined by supplying a JSON structure to UXP at runtime, as in the example below."),(0,i.mdx)("h2",{id:"defining-flyout-menus"},"Defining Flyout Menus"),(0,i.mdx)("p",null,"Flyout menus are defined by a JSON structure that's passed to the UXP ",(0,i.mdx)("inlineCode",{parentName:"p"},"entrypoints.setup"),' method. The JSON tells UXP what the menuitems are, and what to do when they\'re invoked. In the following example, there are three starship-related menuitems. When a menuitem is chosen by the user ("invoked"), UXP calls the plugin-defined function ',(0,i.mdx)("inlineCode",{parentName:"p"},"handleFlyout"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const { entrypoints } = require("uxp");\n// the setup() function tells UXP how to handle\n// the entrypoints defined in your manifest.json file.\nentrypoints.setup({\n  panels: {\n    my_panel_entrypoint: {\n      show() {\n        // put any initialization code for your plugin here.\n      },\n      menuItems: [\n        {id: "setWarpFactor", label: "Warp Factor 1"},\n        {id: "raiseShields", label: "Shields Up"},\n        {id: "makeItSo", label: "Engage"}\n      ],\n      invokeMenu(id) {\n        handleFlyout(id);\n      }\n    }\n  }\n});\n')),(0,i.mdx)("h2",{id:"handling-flyouts"},"Handling Flyouts"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"handleFlyout")," function (defined above) gets passed the flyout menu id. It can use this id to dispatch code to handle each menuitem, as shown below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function handleFlyout(id) {\n  switch (id) {\n    case "setWarpFactor": {\n        console.log("Aye captain");\n        break;\n    }\n    case "raiseShields": {\n        console.log("Shields at 40 percent");\n        break;\n    }\n    case "makeItSo": {\n        console.log("Warp drive is offline");\n        break;\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-misc-flyout-menus-index-md-47538257c8371327970b.js.map