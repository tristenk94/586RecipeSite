#pragma checksum "C:\Users\Sasha\Desktop\THE PROJECT DO NOT DELETE\quickstart\01-login\Views\Shared\DisplayTemplates\Ingredient.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b167b772944390ada89bb975fe0fe7ab3831d46f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_DisplayTemplates_Ingredient), @"mvc.1.0.view", @"/Views/Shared/DisplayTemplates/Ingredient.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/DisplayTemplates/Ingredient.cshtml", typeof(AspNetCore.Views_Shared_DisplayTemplates_Ingredient))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Sasha\Desktop\THE PROJECT DO NOT DELETE\quickstart\01-login\Views\_ViewImports.cshtml"
using RecipeSiteEpic;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b167b772944390ada89bb975fe0fe7ab3831d46f", @"/Views/Shared/DisplayTemplates/Ingredient.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4e797ef2d11da0907ef6ffc149750e427cf3aa2f", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_DisplayTemplates_Ingredient : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<RecipeSiteEpic.Models.Ingredient>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(296, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(341, 28, true);
            WriteLiteral("\r\n\r\n<tr>\r\n    <td>\r\n        ");
            EndContext();
            BeginContext(370, 20, false);
#line 13 "C:\Users\Sasha\Desktop\THE PROJECT DO NOT DELETE\quickstart\01-login\Views\Shared\DisplayTemplates\Ingredient.cshtml"
   Write(Model.ingredientName);

#line default
#line hidden
            EndContext();
            BeginContext(390, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(447, 31, true);
            WriteLiteral("\r\n    </td>\r\n    <td>\r\n        ");
            EndContext();
            BeginContext(479, 22, false);
#line 19 "C:\Users\Sasha\Desktop\THE PROJECT DO NOT DELETE\quickstart\01-login\Views\Shared\DisplayTemplates\Ingredient.cshtml"
   Write(Model.ingredientAmount);

#line default
#line hidden
            EndContext();
            BeginContext(501, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(558, 20, true);
            WriteLiteral("\r\n    </td>\r\n</tr>\r\n");
            EndContext();
            BeginContext(698, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<RecipeSiteEpic.Models.Ingredient> Html { get; private set; }
    }
}
#pragma warning restore 1591
