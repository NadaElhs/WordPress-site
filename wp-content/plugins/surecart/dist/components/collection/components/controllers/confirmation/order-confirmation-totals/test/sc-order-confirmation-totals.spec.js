import{newSpecPage}from"@stencil/core/testing";import{h}from"@stencil/core";import{ScOrderConfirmationTotals}from"../sc-order-confirmation-totals";describe("sc-order-confirmation-totals",(()=>{it("renders",(async()=>{const o=await newSpecPage({components:[ScOrderConfirmationTotals],html:"<sc-order-confirmation-totals></sc-order-confirmation-totals>"});expect(o.root).toMatchSnapshot()})),it("renders bump amount",(async()=>{const o=await newSpecPage({components:[ScOrderConfirmationTotals],template:()=>h("sc-order-confirmation-totals",{order:{bump_amount:-100}})});expect(o.root).toMatchSnapshot()}))}));