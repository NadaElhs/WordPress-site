import{newE2EPage}from"@stencil/core/testing";describe("sc-order-tax-id-input",(()=>{it("renders",(async()=>{const t=await newE2EPage();await t.setContent("<sc-order-tax-id-input></sc-order-tax-id-input>");const e=await t.find("sc-order-tax-id-input");expect(e).toHaveClass("hydrated")})),it("renders with specific taxIdTypes",(async()=>{const t=await newE2EPage(),e=JSON.stringify(["ca_gst","au_abn"]);await t.setContent(`<sc-order-tax-id-input taxIdTypes=${e}></sc-order-tax-id-input>`);const a=await t.find("sc-order-tax-id-input");expect(a.getAttribute("taxIdTypes")).toEqual(e)}))}));