"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[47425],{71633:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return i}});var r=a(87462),o=a(63366),n=(a(15007),a(64983)),l=a(91515),m=["components"],d={},p={_frontmatter:d},s=l.Z;function i(e){var t=e.components,a=(0,o.Z)(e,m);return(0,n.mdx)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"solid-color"},"Solid Color"),(0,n.mdx)("p",null,"Represents a color, and allows for mapping into all available Photoshop color models."),(0,n.mdx)("p",null,"When a property is accessed (either via read or write), the current color model\nof the SolidColor objects gets set to the space of the accessor. Photoshop internally\nconverts the color across these color spaces using the Color Settings set by the user."),(0,n.mdx)("p",null,"For example, to set the foreground color to red:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"const red = new SolidColor();\nred.rgb.red = 255;\nred.rgb.green = 0;\nred.rgb.blue = 0;\n\napp.foregroundColor = red;\n")),(0,n.mdx)("p",null,"To understand how color models change as you interact with a SolidColor object,\nplease see example below:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"const c = new SolidColor();\nconsole.log(c.model); // By default, this will be ColorModel.RGB\n\nc.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data\nconsole.log(c.model); // Now, the model will be ColorModel.CMYK\n\nc.rgb.green = 128; // Model will change back to ColorModel.RGB\n")),(0,n.mdx)("h2",{id:"properties"},"Properties"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"cmyk"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/cmykcolor/"},(0,n.mdx)("em",{parentName:"a"},"CMYKColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s representation in CMYK color space.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"gray"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/graycolor/"},(0,n.mdx)("em",{parentName:"a"},"GrayColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s representation in grayscale.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"hsb"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/hsbcolor/"},(0,n.mdx)("em",{parentName:"a"},"HSBColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s representation in HSB color space.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"lab"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/labcolor/"},(0,n.mdx)("em",{parentName:"a"},"LabColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s representation in LAB color space.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"nearestWebColor"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/rgbcolor/"},(0,n.mdx)("em",{parentName:"a"},"RGBColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s nearest match within the 216 web-safe colors.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"rgb"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/colors/rgbcolor/"},(0,n.mdx)("em",{parentName:"a"},"RGBColor"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The color","'","s representation in RGB color space.")))),(0,n.mdx)("h2",{id:"methods"},"Methods"),(0,n.mdx)("h3",{id:"isequal"},"isEqual"),(0,n.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.0"),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"boolean")),(0,n.mdx)("p",null,"True if the SolidColor object is visually equivalent to the specified color."),(0,n.mdx)("p",null,"Both colors are converted to Lab colorspace,\nand the sum of their normalized squared Euclidian\ndistance in each space is averaged across the three\nthen compared to a small constant (3.5e-6)."),(0,n.mdx)("p",null,"Due to differences in coverage by various color spaces and clamping,\na color that is converted from RGB to CMYK and back may not be visually equal."),(0,n.mdx)("h4",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"color")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},(0,n.mdx)("em",{parentName:"a"},"SolidColor")))))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-solidcolor-md-83a321251efd43c0488b.js.map