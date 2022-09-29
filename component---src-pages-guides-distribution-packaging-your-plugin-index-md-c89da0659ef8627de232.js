"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[4086],{10551:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var i,p=t(87462),o=t(63366),n=(t(15007),t(64983)),s=t(91515),c=["components"],l={},r=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",e)}),d={_frontmatter:l},m=s.Z;function u(e){var a=e.components,t=(0,o.Z)(e,c);return(0,n.mdx)(m,(0,p.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"packaging-your-plugin"},"Packaging Your Plugin"),(0,n.mdx)("p",null,"Taking your plugin code and packaging it has never been easier."),(0,n.mdx)("p",null,"UXP plugins for Photoshop are distributed in the form of a ",(0,n.mdx)("inlineCode",{parentName:"p"},".ccx")," file. Under the hood, this is a zip file. Unless you have some special requirements, you should not be creating this zip file yourself."),(0,n.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"IMPORTANT"),":\nBefore you package your plugin for distribution outside your own computer, make sure you've obtained a valid ID from the ",(0,n.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console"),". Without an id (which goes in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"id")," field of your plugin's ",(0,n.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file), you won't be able to distribute your plugin in the Creative Cloud Marketplace."),(0,n.mdx)("p",null,"Using the ",(0,n.mdx)("a",{parentName:"p",href:"../../devtool/"},"UXP Developer Tool"),", choose ",(0,n.mdx)("inlineCode",{parentName:"p"},"Package")," from the Actions menu (the ellipsis on the right side of the Developer Tool window, on the same line as your plugin name):"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"240%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/15139edff2136f8ebc716710fc7f54fc/7ee82/udt-package-menu.webp 280w"],sizes:"(max-width: 280px) 100vw, 280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/15139edff2136f8ebc716710fc7f54fc/2a48b/udt-package-menu.png 280w"],sizes:"(max-width: 280px) 100vw, 280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/15139edff2136f8ebc716710fc7f54fc/2a48b/udt-package-menu.png",alt:"Package Menu",title:"Package Menu",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,'This shows a "Select target directory" dialog. Choose a directory where your built plugin ',(0,n.mdx)("inlineCode",{parentName:"p"},".ccx")," file should reside."),(0,n.mdx)("p",null,"After the ",(0,n.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been created, you should see this message at the bottom of the Developer Tool window:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"788px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.375000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/5530d/package-success.webp 320w","/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/0c8fb/package-success.webp 640w","/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/8b443/package-success.webp 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/dd4a7/package-success.png 320w","/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/0f09e/package-success.png 640w","/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/c3dd4/package-success.png 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/f1bdd32ca30c6a49ec9754b201dea5a6/c3dd4/package-success.png",alt:"Package Success",title:"Package Success",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"If instead, you see this:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"660px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/5530d/package-failed.webp 320w","/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/0c8fb/package-failed.webp 640w","/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/3d671/package-failed.webp 660w"],sizes:"(max-width: 660px) 100vw, 660px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/dd4a7/package-failed.png 320w","/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/0f09e/package-failed.png 640w","/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/7c811/package-failed.png 660w"],sizes:"(max-width: 660px) 100vw, 660px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/7c811/package-failed.png",alt:"Package Failed",title:"Package Failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Click on ",(0,n.mdx)("inlineCode",{parentName:"p"},"Details")," to view a window that shows why the packaging failed."),(0,n.mdx)("p",null,"Once your ",(0,n.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been built, you should test it locally before doing anything else. To install a .ccx file into any Creative Cloud application, double click it. This will open the Creative Cloud application, and you'll get a warning that your plugin hasn't been verified by Adobe:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"868px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.81250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/5530d/verify-failed.webp 320w","/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/0c8fb/verify-failed.webp 640w","/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/cef0d/verify-failed.webp 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/dd4a7/verify-failed.png 320w","/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/0f09e/verify-failed.png 640w","/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/9a8ca/verify-failed.png 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/34e794f7595a5a11641c2c56ffc5077d/9a8ca/verify-failed.png",alt:"Verify Failed",title:"Verify Failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Since you wrote the plugin, it's probably safe to install. Click ",(0,n.mdx)("inlineCode",{parentName:"p"},"Install locally")," and you'll see another warning:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.31250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/5530d/install-warning.webp 320w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/0c8fb/install-warning.webp 640w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/94b1e/install-warning.webp 1280w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/3ac9e/install-warning.webp 1368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/dd4a7/install-warning.png 320w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/0f09e/install-warning.png 640w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/bbbf7/install-warning.png 1280w","/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/cc0ea/install-warning.png 1368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/9f2b1998096aac9e60a920bea16d1e51/bbbf7/install-warning.png",alt:"Install Warning",title:"Install Warning",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Since, in this case, ",(0,n.mdx)("em",{parentName:"p"},"you")," are the third-party developer, it's safe to click OK. Obviously, if someone else sends you a ",(0,n.mdx)("inlineCode",{parentName:"p"},".ccx")," file and you get this dialog, you should make sure you trust the person who sent it."),(0,n.mdx)("p",null,"Now that you have your plugin installed, test it again to make sure the packaged version performs correctly. Then move on to ",(0,n.mdx)("a",{parentName:"p",href:"../distribution-options"},"Options for Distribution")," to get your plugin out into the world."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-distribution-packaging-your-plugin-index-md-c89da0659ef8627de232.js.map