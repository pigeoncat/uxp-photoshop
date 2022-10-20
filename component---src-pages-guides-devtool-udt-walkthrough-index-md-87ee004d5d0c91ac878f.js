"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[77671],{37403:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var o,i=a(87462),p=a(63366),n=(a(15007),a(64983)),s=a(91515),d=["components"],l={},c=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",e)}),r={_frontmatter:l},m=s.Z;function u(e){var t=e.components,a=(0,p.Z)(e,d);return(0,n.mdx)(m,(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"creating-a-plugin-with-the-uxp-developer-tool"},"Creating a Plugin with the UXP Developer Tool"),(0,n.mdx)("p",null,"So you have Photoshop, you have the UXP Developer Tool, and you have Visual Studio Code or other programmer's text editor. Now what?"),(0,n.mdx)("p",null,"First make sure you have the UXP Developer Tool (UDT). Learn about installing UDT from ",(0,n.mdx)("a",{parentName:"p",href:"../devtool/installation"},"here"),". Then follow these steps:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Launch Photoshop."),(0,n.mdx)("li",{parentName:"ol"},"Launch the UXP Developer Tool. If you've never launched it before, you should see a window like this:")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"895px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.24999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/5530d/udt-start.webp 320w","/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/0c8fb/udt-start.webp 640w","/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/dd3ab/udt-start.webp 895w"],sizes:"(max-width: 895px) 100vw, 895px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/dd4a7/udt-start.png 320w","/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/0f09e/udt-start.png 640w","/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/b002d/udt-start.png 895w"],sizes:"(max-width: 895px) 100vw, 895px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/588b26ce22af87ab9839116b42a19976/b002d/udt-start.png",alt:"UDT Start",title:"UDT Start",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"You'll also see this window if you have no plugins loaded in the Tool."),(0,n.mdx)("p",null,'The left pane shows applications that are "connected" to the tool. At this time, the only applications that can connect are Photoshop and XD. In this pane, you should see "Adobe Photoshop" in the ',(0,n.mdx)("inlineCode",{parentName:"p"},"Connected Applications")," list. If you don't, something is wrong; UDT can't connect to Photoshop. Make sure you're running at least version 22.0.0 of Photoshop; earlier versions did not support UXP."),(0,n.mdx)("p",null,"The center pane shows the plugs that are loaded in UDT, but you don't have any yet. At the top right is a gear icon; if selected, it shows this sheet:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"581px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ed6f8bc4734dc6ebbf5c377c36001c08/5530d/udt-gear-icon.webp 320w","/uxp-photoshop/static/ed6f8bc4734dc6ebbf5c377c36001c08/cf388/udt-gear-icon.webp 581w"],sizes:"(max-width: 581px) 100vw, 581px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ed6f8bc4734dc6ebbf5c377c36001c08/dd4a7/udt-gear-icon.png 320w","/uxp-photoshop/static/ed6f8bc4734dc6ebbf5c377c36001c08/3f4f8/udt-gear-icon.png 581w"],sizes:"(max-width: 581px) 100vw, 581px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/ed6f8bc4734dc6ebbf5c377c36001c08/3f4f8/udt-gear-icon.png",alt:"UDT gear icon sheet",title:"UDT gear icon sheet",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"You shouldn't need to change the Service Port, which is what UDT uses to communicate with host applications. Feel free to change the theme."),(0,n.mdx)("ol",{start:3},(0,n.mdx)("li",{parentName:"ol"},"Close that sheet, then click ",(0,n.mdx)("inlineCode",{parentName:"li"},"Create Plugin"),". You'll see this dialog:")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/5530d/create-plugin.webp 320w","/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/0c8fb/create-plugin.webp 640w","/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/7bcb4/create-plugin.webp 945w"],sizes:"(max-width: 945px) 100vw, 945px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/dd4a7/create-plugin.png 320w","/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/0f09e/create-plugin.png 640w","/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/e7d8e/create-plugin.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/5f8dadba6df767d7c792d2c9fdc61cdc/e7d8e/create-plugin.png",alt:"Create Plugin dialog",title:"Create Plugin dialog",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("ol",{start:4},(0,n.mdx)("li",{parentName:"ol"},"Fill in the fields. The text in gray is cue text, ",(0,n.mdx)("em",{parentName:"li"},"not")," a default value, so you need to fill in ",(0,n.mdx)("em",{parentName:"li"},"all"),' the fields. Give your plugin a unique name (i.e. don\'t call it "Layers") and plugin ID. Select "Adobe Photoshop" as the Host Application. Select "ps-starter" as the Template.')),(0,n.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"IMPORTANT"),":\nWhen you distribute your plugin, you'll need to obtain a plugin ID from the ",(0,n.mdx)("a",{parentName:"p",href:"https://console.adobe.io/home"},"Adobe Developer Console"),". For testing, though, just invent an id like 'com.yourname.pluginname'."),(0,n.mdx)("p",null,"For this exercise, we'll use the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ps-starter")," template, which creates a very basic plugin using basic JavaScript with no libraries. Other choices in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Template")," popup include ",(0,n.mdx)("inlineCode",{parentName:"p"},"ps-react-starter"),", which creates a simple React-based plugin."),(0,n.mdx)("ol",{start:5},(0,n.mdx)("li",{parentName:"ol"},"Click ",(0,n.mdx)("inlineCode",{parentName:"li"},"Next"),". UDT will prompt for a location in which to save the plugin files. Note that it ",(0,n.mdx)("em",{parentName:"li"},"does not")," create a folder by default, so save your plugin into a previously-created empty folder, or click the ",(0,n.mdx)("inlineCode",{parentName:"li"},"create folder")," icon in the top left of the Save dialog:")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1026px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/5530d/create-folder.webp 320w","/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/0c8fb/create-folder.webp 640w","/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/a9696/create-folder.webp 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/dd4a7/create-folder.png 320w","/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/0f09e/create-folder.png 640w","/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/9cda9/create-folder.png 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/7d284b9d6794248e610ab1a0917a9ec5/9cda9/create-folder.png",alt:"Create Folder",title:"Create Folder",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("ol",{start:6},(0,n.mdx)("li",{parentName:"ol"},"The Developer Tool will save your plugin files, and you should then see this message:")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1190px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.874999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/5530d/success.webp 320w","/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/0c8fb/success.webp 640w","/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/c89d2/success.webp 1190w"],sizes:"(max-width: 1190px) 100vw, 1190px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/dd4a7/success.png 320w","/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/0f09e/success.png 640w","/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/ba099/success.png 1190w"],sizes:"(max-width: 1190px) 100vw, 1190px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/687ab2906c6129f4f96b1ce4672a906a/ba099/success.png",alt:"Plugin Created",title:"Plugin Created",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"The message says you need run extra commands from the terminal. This is not true for simple JavaScript-only plugins, only for React-based ones.")),(0,n.mdx)("ol",{start:7},(0,n.mdx)("li",{parentName:"ol"},"Now, load your new plugin by clicking the ",(0,n.mdx)("inlineCode",{parentName:"li"},"•••"),' (aka "Actions") menu (next to the name of the plugin you just created), and select ',(0,n.mdx)("inlineCode",{parentName:"li"},"Load"),".")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/5530d/load-plugin.webp 320w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/0c8fb/load-plugin.webp 640w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/94b1e/load-plugin.webp 1280w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/6665b/load-plugin.webp 1544w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/dd4a7/load-plugin.png 320w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/0f09e/load-plugin.png 640w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/bbbf7/load-plugin.png 1280w","/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/bb3e3/load-plugin.png 1544w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/1e9248d8a79ea47becf38f39d770c133/bbbf7/load-plugin.png",alt:"Load Plugin",title:"Load Plugin",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null," You should see a message like this at the bottom of the UDT window:"),(0,n.mdx)("p",null," ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"337px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5cdfa43b4222041173046eb76951756e/5530d/udt-load-successful.webp 320w","/uxp-photoshop/static/5cdfa43b4222041173046eb76951756e/413c5/udt-load-successful.webp 337w"],sizes:"(max-width: 337px) 100vw, 337px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5cdfa43b4222041173046eb76951756e/dd4a7/udt-load-successful.png 320w","/uxp-photoshop/static/5cdfa43b4222041173046eb76951756e/f57f1/udt-load-successful.png 337w"],sizes:"(max-width: 337px) 100vw, 337px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/5cdfa43b4222041173046eb76951756e/f57f1/udt-load-successful.png",alt:"Load Successful",title:"Load Successful",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null," Now take a look at Photoshop; your new plugin panel should be running!"),(0,n.mdx)("p",null," If it didn't load, you'll see an error popup like this:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"400px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.937499999999998%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ea0c8dfa3f29b1a483b3432963dd7072/5530d/udt-load-failed.webp 320w","/uxp-photoshop/static/ea0c8dfa3f29b1a483b3432963dd7072/2276a/udt-load-failed.webp 400w"],sizes:"(max-width: 400px) 100vw, 400px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ea0c8dfa3f29b1a483b3432963dd7072/dd4a7/udt-load-failed.png 320w","/uxp-photoshop/static/ea0c8dfa3f29b1a483b3432963dd7072/d9f49/udt-load-failed.png 400w"],sizes:"(max-width: 400px) 100vw, 400px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/ea0c8dfa3f29b1a483b3432963dd7072/d9f49/udt-load-failed.png",alt:"Load Failed",title:"Load Failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null," Clicking the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Details")," link in this message will show an error log indicating why the plugin failed to load:"),(0,n.mdx)("p",null," ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1270px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/5530d/udt-failure-log.webp 320w","/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/0c8fb/udt-failure-log.webp 640w","/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/ad398/udt-failure-log.webp 1270w"],sizes:"(max-width: 1270px) 100vw, 1270px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/dd4a7/udt-failure-log.png 320w","/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/0f09e/udt-failure-log.png 640w","/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/6b882/udt-failure-log.png 1270w"],sizes:"(max-width: 1270px) 100vw, 1270px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/3788e7c67c2eaaa4fe1a21218966f4a6/6b882/udt-failure-log.png",alt:"Failure Log",title:"Failure Log",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h2",{id:"now-what"},"Now What?"),(0,n.mdx)("p",null," Customize your plugin by editing the .js and .html files, perhaps adding some CSS. Make it your own! Don't forget to edit the ",(0,n.mdx)("inlineCode",{parentName:"p"},"README.md")," file and, if necessary, the ",(0,n.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file."),(0,n.mdx)("p",null,"In case you've closed your plugin's panel in Photoshop, you can find it again in Photoshop's ",(0,n.mdx)("inlineCode",{parentName:"p"},"Plugin")," menu:"),(0,n.mdx)("p",null," ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"613px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5e156b5ddcee415a755d8ae104653621/5530d/udt-ps-plugins-menu.webp 320w","/uxp-photoshop/static/5e156b5ddcee415a755d8ae104653621/5c2f3/udt-ps-plugins-menu.webp 613w"],sizes:"(max-width: 613px) 100vw, 613px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/5e156b5ddcee415a755d8ae104653621/dd4a7/udt-ps-plugins-menu.png 320w","/uxp-photoshop/static/5e156b5ddcee415a755d8ae104653621/ac863/udt-ps-plugins-menu.png 613w"],sizes:"(max-width: 613px) 100vw, 613px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/5e156b5ddcee415a755d8ae104653621/ac863/udt-ps-plugins-menu.png",alt:"Plugins Menu",title:"Plugins Menu",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h2",{id:"watching-reloading-and-debugging"},"Watching, Reloading, and Debugging"),(0,n.mdx)("p",null," Selecting the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Watch")," item from the Actions menu causes the Developer Tool to watch for any changes in your code on disk.\nWhenever you make a change to a file in your project, UDT will reload your plugin automatically. This makes for a very rapid code->make mistakes->fix mistakes->reload cycle."),(0,n.mdx)("p",null," You can also reload your plugin manually by selecting ",(0,n.mdx)("inlineCode",{parentName:"p"},"Reload")," from the Actions menu. If you have ",(0,n.mdx)("inlineCode",{parentName:"p"},"Watch")," enabled, you shouldn't have to do this. But some people are superstitious."),(0,n.mdx)("p",null," You can also debug your plugin by choosing ",(0,n.mdx)("inlineCode",{parentName:"p"},"Debug")," from the Actions menu. This brings up a window like this:"),(0,n.mdx)("p",null," ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1138px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.62500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/145d380615f132327c64db1c817400e8/5530d/udt-debugger.webp 320w","/uxp-photoshop/static/145d380615f132327c64db1c817400e8/0c8fb/udt-debugger.webp 640w","/uxp-photoshop/static/145d380615f132327c64db1c817400e8/58ffc/udt-debugger.webp 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/145d380615f132327c64db1c817400e8/dd4a7/udt-debugger.png 320w","/uxp-photoshop/static/145d380615f132327c64db1c817400e8/0f09e/udt-debugger.png 640w","/uxp-photoshop/static/145d380615f132327c64db1c817400e8/0ff2a/udt-debugger.png 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/145d380615f132327c64db1c817400e8/0ff2a/udt-debugger.png",alt:"Debug Window",title:"Debug Window",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null," In this debugger (which resembles the Chrome debugger) you can look at the console log, and do the usual debugger things such as setting breakpoints, stepping into and out of functions, etc. If you just want to look at logs without dealing with the debugger, you can choose the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Logs")," option in the Actions menu."),(0,n.mdx)("h2",{id:"multiple-plugins"},"Multiple Plugins"),(0,n.mdx)("p",null," You can host as many plugins as you want in the UXP Developer Tool. You can either create the plugin folder structure and files from scratch and click the blue ",(0,n.mdx)("inlineCode",{parentName:"p"},"Add Plugin")," button in the Tool, or you can click the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Create Plugin")," button to have it created for you, wizard-style. Then you choose the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Load")," item in the Actions menu to load your plugin into Photoshop."),(0,n.mdx)("h2",{id:"packaging"},"Packaging"),(0,n.mdx)("p",null," In order to distribute your plugin (after it's been throughly polished and debugged), you'll need to package it as a \"ccx\" file. This is easily accomplished by choosing the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Package")," option in the Actions menu. Make sure you get a plugin ID from the ",(0,n.mdx)("a",{parentName:"p",href:"https://console.adobe.io/home"},"Adobe Developer Console")," website before packaging your plugin for distribution."),(0,n.mdx)("p",null," To distribute your plugin, see ",(0,n.mdx)("a",{parentName:"p",href:"../../distribution/"},"Sharing Your Plugin"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-devtool-udt-walkthrough-index-md-87ee004d5d0c91ac878f.js.map