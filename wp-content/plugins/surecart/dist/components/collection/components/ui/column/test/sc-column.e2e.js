import{newE2EPage}from"@stencil/core/testing";describe("sc-column",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-column></sc-column>");const t=await e.find("sc-column");expect(t).toHaveClass("hydrated")}))}));