"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[5011],{73194:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return d},default:function(){return p}});var t=n(87462),a=n(63366),l=(n(15007),n(64983)),o=n(91515),r=["components"],d={},s={_frontmatter:d},m=o.Z;function p(e){var i=e.components,n=(0,a.Z)(e,r);return(0,l.mdx)(m,(0,t.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"known-issues"},"Known Issues"),(0,l.mdx)("p",null,"The following issues are known. Please check this page with future updates, as known issues will be fixed over time, and new issues will likely be discovered."),(0,l.mdx)("h2",{id:"general-issues"},"General Issues"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Panel icons must always be 23x23 (46x46) PNG files. SVG icons are not supported on Photoshop toolbars."),(0,l.mdx)("li",{parentName:"ul"},"Plugin icons must always be 24x24 (48x48) files. In the manifest, they must currently be specified with ",(0,l.mdx)("inlineCode",{parentName:"li"},"width: 48")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"height: 48"),". Plugin icons do support SVG files, but UXP doesn't support all SVG features, which means you'll want to test your SVG icon before shipping your plugin if you decide to use SVG icons in the Plugin Panel."),(0,l.mdx)("li",{parentName:"ul"},"When using ",(0,l.mdx)("inlineCode",{parentName:"li"},'require("uxp").entrypoints.setup()')," in a delayed fashion (that is, not immediately at plugin start), you may encounter an uncatchable error. This appears to be related to how quickly the ",(0,l.mdx)("inlineCode",{parentName:"li"},"setup")," function is called in relation to drawing the first few frames on the display. If this delay is short (less than ~20ms), the call will likely succeed. If it is long, an error is likely to occur. A delay in calling this function should not cause any errors to be thrown, and will be fixed in a future release. (PS-57605)"),(0,l.mdx)("li",{parentName:"ul"},"When creating a flyout separator, you must specify an ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," of ",(0,l.mdx)("inlineCode",{parentName:"li"},"-"),". This will be fixed in the next UXP release. (PS-56279)"),(0,l.mdx)("li",{parentName:"ul"},"When attempting to use the UXP clipboard APIs in panel-less plugins, errors will be thrown. This will be fixed in a future release. (UXP-15542)")),(0,l.mdx)("h2",{id:"user-interface"},"User Interface"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"While ",(0,l.mdx)("inlineCode",{parentName:"li"},"z-index")," is supported, no element can overlay a widget that has text editing capabilities. Text fields and areas will always render the text editor ",(0,l.mdx)("em",{parentName:"li"},"above")," everything else in the same panel or dialog. As such, you can use popovers to render content above them, ",(0,l.mdx)("em",{parentName:"li"},"or")," hide the element if you need to render some content above it. "),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"window.devicePixelRatio")," (and corresponding ",(0,l.mdx)("inlineCode",{parentName:"li"},"element.uxpContainer.devicePixelRatio"),") always returns ",(0,l.mdx)("inlineCode",{parentName:"li"},"1"),". This is incorrect and will be fixed in the future. Note that ",(0,l.mdx)("inlineCode",{parentName:"li"},"window.devicePixelRatio")," may not always match an element's pixel ratio if the element is visible on a screen with a different pixel ratio from the primary screen."),(0,l.mdx)("li",{parentName:"ul"},"Not all SVG files are supported by UXP. UXP's SVG renderer is targeted for simple icons and the like; complex SVGs may fail to render completely, or may render in unexpected ways. The SVG renderer will improve in the future."),(0,l.mdx)("li",{parentName:"ul"},"Images formatted in a grayscale mode will fail to render. They will take up space in the DOM, but will not be visible to the user."),(0,l.mdx)("li",{parentName:"ul"},"When the mouse cursor is changed, it may not revert back to its original state in UWP."),(0,l.mdx)("li",{parentName:"ul"},"It is not possible to trigger the emoji selector in a text field on macOS."),(0,l.mdx)("li",{parentName:"ul"},"Many SVGs are known to render in odd ways in the UI. These issues will be addressed in the future, but we would love to hear your reports of any SVGs that don't work, and how you fixed it."),(0,l.mdx)("li",{parentName:"ul"},"When tabbing in a scroll view, the scroll view is not automatically scrolled to ensure the target control is in view (macOS Only)."),(0,l.mdx)("li",{parentName:"ul"},"Emojis are rendered in the font color on Windows 10, instead of using the emoji's colors."),(0,l.mdx)("li",{parentName:"ul"},"When a control in a panel is disabled and enabled, it is no longer reachable via TAB. This may also impact controls added ",(0,l.mdx)("em",{parentName:"li"},"after")," a panel is shown for the first time."),(0,l.mdx)("li",{parentName:"ul"},"Drag and Drop is not currently supported."),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"Save")," dialog that appears when using ",(0,l.mdx)("inlineCode",{parentName:"li"},"getFileForSaving")," appears ",(0,l.mdx)("em",{parentName:"li"},"behind")," the plugin panels. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"Open")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"Folder")," dialogs may also do this on occasion on both macOS and Windows. This will be fixed in a future release. (PS-57708)"),(0,l.mdx)("li",{parentName:"ul"},"When using ",(0,l.mdx)("inlineCode",{parentName:"li"},"<img>")," tags inside a ",(0,l.mdx)("inlineCode",{parentName:"li"},"<dialog>"),", you should ensure that the images have an explicit ",(0,l.mdx)("inlineCode",{parentName:"li"},"width")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"height")," on either the image or the dialog. Otherwise, the dialog will attempt to resize to the smallest possible size, and images initially have a 0x0 dimension until at least one frame has been rendered to the display. This can cause the dialog to display at the wrong size."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<img>")," tags do not currently handle embedded rotation information.")),(0,l.mdx)("h2",{id:"spectrum-uxp-components"},"Spectrum UXP Components"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Buttons do not indicate when they are focused from the keyboard."),(0,l.mdx)("li",{parentName:"ul"},"You should make sure ",(0,l.mdx)("inlineCode",{parentName:"li"},"sp-dropdown")," elements have a width set, otherwise they will size according to the currently selected item. This may cause items in the dropdown itself to appear truncated, wrapped, or oddly formatted."),(0,l.mdx)("li",{parentName:"ul"},"Password field values cannot be read on macOS. A workaround for this is to set the ",(0,l.mdx)("inlineCode",{parentName:"li"},"type")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"text")," on ",(0,l.mdx)("inlineCode",{parentName:"li"},"focus")," and switch it back to ",(0,l.mdx)("inlineCode",{parentName:"li"},"password")," on ",(0,l.mdx)("inlineCode",{parentName:"li"},"blur"),"."),(0,l.mdx)("li",{parentName:"ul"},"Displaying a file picker or browser from a Spectrum UXP control (such as a button) may result in an infinite series of ",(0,l.mdx)("inlineCode",{parentName:"li"},"click")," events. Until this is fixed in UXP, you'll need to add some logic to prevent the infinite loop or use a native widget instead. (PS-57264)"),(0,l.mdx)("li",{parentName:"ul"},"Dropdowns don't currently respond to arrow keys; this will be fixed in a future update."),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"location")," attribute for ",(0,l.mdx)("inlineCode",{parentName:"li"},"sp-tooltip"),' seems like it would control the position of the tooltip relative to its attachment. This is not how the attribute actually works -- it instead controls the tooltip\'s "tip" direction. If ',(0,l.mdx)("inlineCode",{parentName:"li"},"location")," is set to ",(0,l.mdx)("inlineCode",{parentName:"li"},"bottom"),", the tip will be pointed upwards under the assumption that your code has already placed the tooltip below the control. (PS-56708) ",(0,l.mdx)("em",{parentName:"li"},"Better tooltip handling is coming in a future release"),"."),(0,l.mdx)("li",{parentName:"ul"},"The numeric ",(0,l.mdx)("inlineCode",{parentName:"li"},"sp-textfield")," can trigger numeric validation errors, even when the entered value would seem to be correct. This will be addressed in a future release. The limitation on valid ranges is an issue with numeric fields in Photoshop in general and is a separate issue. (PS-57698)")),(0,l.mdx)("h2",{id:"events"},"Events"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"uxpshowpanel")," and the corresponding ",(0,l.mdx)("inlineCode",{parentName:"li"},"show")," callback occurs only once, when the panel is initially made visible. It will not recur. This will be fixed in the future. (PS-57284)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"uxphidepanel")," and the corresponding ",(0,l.mdx)("inlineCode",{parentName:"li"},"hide")," callback never occurs, even when the panel is made invisible. This will be fixed in the future. (PS-57284)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"uxpcommand")," will incude ",(0,l.mdx)("inlineCode",{parentName:"li"},"uxpshowpanel")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"uxphidepanel")," in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"commandId")," field of the event whenever panels are shown and hidden. For plugins ",(0,l.mdx)("em",{parentName:"li"},"with a single panel"),", this is sufficient to detect that your panel's state has changed. If your plugin has multiple panels, there is no way (at this time) to detect which panel was shown or hidden."),(0,l.mdx)("li",{parentName:"ul"},"Interactive elements swallow most events."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"keypress")," is not currently supported.")),(0,l.mdx)("h2",{id:"html-elements"},"HTML Elements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<option>")," tags ",(0,l.mdx)("em",{parentName:"li"},"must")," have a ",(0,l.mdx)("inlineCode",{parentName:"li"},"value")," attribute, or referencing the ",(0,l.mdx)("inlineCode",{parentName:"li"},"select"),"'s ",(0,l.mdx)("inlineCode",{parentName:"li"},"value")," property will return ",(0,l.mdx)("inlineCode",{parentName:"li"},"undefined"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},'<select value="…"/>')," does not show the value as selected. Instead, get a reference to the element and call ",(0,l.mdx)("inlineCode",{parentName:"li"},'setAttribute("value", …)')," or use the ",(0,l.mdx)("inlineCode",{parentName:"li"},"selected")," attribute on the ",(0,l.mdx)("inlineCode",{parentName:"li"},"option")," tags."),(0,l.mdx)("li",{parentName:"ul"},"If you don’t specify a width for your ",(0,l.mdx)("inlineCode",{parentName:"li"},"form"),", block elements inside may not take up the entire width. Workaround: always set a width for your ",(0,l.mdx)("inlineCode",{parentName:"li"},"form")," elements."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"form"),"s only support ",(0,l.mdx)("inlineCode",{parentName:"li"},'method="dialog"'),". They do not submit to a URL automatically."),(0,l.mdx)("li",{parentName:"ul"},"It is not currently possible to specify the tab order."),(0,l.mdx)("li",{parentName:"ul"},"The size of a ",(0,l.mdx)("inlineCode",{parentName:"li"},"<textarea>")," cannot be set with ",(0,l.mdx)("inlineCode",{parentName:"li"},"rows")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"cols"),". Use CSS styles ",(0,l.mdx)("inlineCode",{parentName:"li"},"height")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"width")," respectively."),(0,l.mdx)("li",{parentName:"ul"},"HTML5 input validation is not supported."),(0,l.mdx)("li",{parentName:"ul"},"Images that fail to load will not render any “broken icon” image in place."),(0,l.mdx)("li",{parentName:"ul"},"Input elements do not accept ",(0,l.mdx)("inlineCode",{parentName:"li"},"defaultValue"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<option>")," tags do not support ",(0,l.mdx)("inlineCode",{parentName:"li"},"disabled")," attributes."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},'<label for="id"/>')," is not supported. Wrap ",(0,l.mdx)("inlineCode",{parentName:"li"},"<label>")," around the control instead."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},'<input type="file" />')," is not supported."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},'<input type="color" />')," is not supported."),(0,l.mdx)("li",{parentName:"ul"},"Using unitless values in ",(0,l.mdx)("inlineCode",{parentName:"li"},"width")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"height")," attributes are not supported in UXP 3.1. Use ",(0,l.mdx)("inlineCode",{parentName:"li"},"px"),", or CSS styles."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<label>")," uses ",(0,l.mdx)("inlineCode",{parentName:"li"},"inline-flex")," layout semantics in UXP 3.1 mode, with ",(0,l.mdx)("inlineCode",{parentName:"li"},"flex-wrap: wrap")," enabled. If you need to prevent wrapping, use ",(0,l.mdx)("inlineCode",{parentName:"li"},"flex-wrap: nowrap")," on these elements. Note that the default layout behavior is now ",(0,l.mdx)("em",{parentName:"li"},"horizontal")," not ",(0,l.mdx)("em",{parentName:"li"},"vertical"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<progress>")," is not theme aware."),(0,l.mdx)("li",{parentName:"ul"},"Password field values cannot be read on macOS. A workaround for this is to set the ",(0,l.mdx)("inlineCode",{parentName:"li"},"type")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"text")," on ",(0,l.mdx)("inlineCode",{parentName:"li"},"focus")," and switch it back to ",(0,l.mdx)("inlineCode",{parentName:"li"},"password")," on ",(0,l.mdx)("inlineCode",{parentName:"li"},"blur"),".")),(0,l.mdx)("h2",{id:"layout"},"Layout"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When rendering inline text that wraps, borders, outlines, and backgrounds only apply to the first line. You should place borders, outlines, and backgrounds on elements with block layout semantics."),(0,l.mdx)("li",{parentName:"ul"},"Mixing inline text with UI controls is unlikely to result in a pleasant appearance. ",(0,l.mdx)("inlineCode",{parentName:"li"},"vertical-align")," is supported, but baseline layout does not always do what you might expect,  which makes it difficult to properly align widgets and labels. As such, you should use ",(0,l.mdx)("inlineCode",{parentName:"li"},"flex")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"inline-flex")," when using UI elements.")),(0,l.mdx)("h2",{id:"css"},"CSS"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"It is not currently possible to assign multiple border colors to a container."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"baseline")," alignment is supported, but buggy; do not rely on its behavior for now."),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"font")," shorthand CSS rule is not supported."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"text-transform")," is not supported,"),(0,l.mdx)("li",{parentName:"ul"},"CSS transitions and animations are not supported."),(0,l.mdx)("li",{parentName:"ul"},"A solid ",(0,l.mdx)("inlineCode",{parentName:"li"},"outline")," will not render unless a color is also provided. When using ",(0,l.mdx)("inlineCode",{parentName:"li"},"outline: solid"),", be sure to supply an outline color as well."),(0,l.mdx)("li",{parentName:"ul"},"Font sizes do not adjust to dynamic units like ",(0,l.mdx)("inlineCode",{parentName:"li"},"vh"),". As such, if you use ",(0,l.mdx)("inlineCode",{parentName:"li"},"font-size: 1vh"),", and the viewport changes size, the font size will not adjust."),(0,l.mdx)("li",{parentName:"ul"},"Setting a ",(0,l.mdx)("inlineCode",{parentName:"li"},"border-color")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"unset")," may not reset the color to its initial value."),(0,l.mdx)("li",{parentName:"ul"},"Borders and backgrounds are not drawn correctly when coupled with ",(0,l.mdx)("inlineCode",{parentName:"li"},"object-fit"),"."),(0,l.mdx)("li",{parentName:"ul"},"The bottom border may not always render with the same width as the other borders."),(0,l.mdx)("li",{parentName:"ul"},"Underlines may render very thin."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"calc")," only works for length/numeric properties. Using ",(0,l.mdx)("inlineCode",{parentName:"li"},"calc")," for a color will not work."),(0,l.mdx)("li",{parentName:"ul"},"If you need to override an anchor link color, use ",(0,l.mdx)("inlineCode",{parentName:"li"},"a[href]")," as the selector to override it.")),(0,l.mdx)("h2",{id:"dom"},"DOM"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When a dialog is closed, it is not removed from the DOM. This is per spec. If you want the dialog to be removed from the DOM, you must call ",(0,l.mdx)("inlineCode",{parentName:"li"},"HTMLDialogElement#remove")," explicitly."),(0,l.mdx)("li",{parentName:"ul"},"When applying HTML using ",(0,l.mdx)("inlineCode",{parentName:"li"},"innerHTML"),", event handlers and scripts are currently parsed in Photoshop, but not in XD. ",(0,l.mdx)("strong",{parentName:"li"},"DO NOT RELY ON THIS BEHAVIOR"),", as it will likely go away in the future and match XD's behavior (which is by design).")),(0,l.mdx)("h2",{id:"network-io"},"Network I/O"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"On macOS, it is not possible to use self-signed certificates with secure Websockets."),(0,l.mdx)("li",{parentName:"ul"},"Websockets do not support extensions."),(0,l.mdx)("li",{parentName:"ul"},"XHR can only send binary content using an ArrayBuffer -- Blob is not supported."),(0,l.mdx)("li",{parentName:"ul"},"XHR does not support cookies."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"responseURL")," is not supported on XHR")),(0,l.mdx)("h2",{id:"file-io"},"File I/O"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"Blob")," is not supported. Use ",(0,l.mdx)("inlineCode",{parentName:"li"},"ArrayBuffer")," instead."),(0,l.mdx)("li",{parentName:"ul"},"Copying a file from a folder outside the plugin's data folder into the plugin's data folder (using ",(0,l.mdx)("inlineCode",{parentName:"li"},"getDataFolder"),') may fail on Windows with the error `fs.copyFile fallback failed - Error: Route not found". (PS-57707)'),(0,l.mdx)("li",{parentName:"ul"},"The list of images in ",(0,l.mdx)("inlineCode",{parentName:"li"},'require("uxp").storage.fileTypes.images')," is not intended to be a complete representation of all supported image types by the host. Instead, this array includes some of the more common images. You can pass your own array with the desired file types instead. (PS-57601)"),(0,l.mdx)("li",{parentName:"ul"},"It's not currently possible to obtain metadata for file objects in the plugin's bundle. The date or size will be invalid. Metadata from other sources (such as ",(0,l.mdx)("inlineCode",{parentName:"li"},"getDataFolder"),") are unaffected. This will be fixed in a future release. (PS-57307)")),(0,l.mdx)("h2",{id:"debugging"},"Debugging"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"If debugging exposes any private fields and methods, do not attempt to use them. Plugins referring to private APIs may be rejected or removed from the Plugin Marketplace, and will be prone to breaking unexpectedly.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-known-issues-md-332c1d55c87290c3c482.js.map