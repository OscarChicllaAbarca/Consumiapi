(function(){"use strict";var e={8001:function(e,t,o){var a=o(5130),n=o(6768);function r(e,t,o,a,r,i){const s=(0,n.g2)("Navbar"),l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",null,[a.isLoginPage?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(s,{key:0})),a.isLoginPage?((0,n.uX)(),(0,n.Wv)(l,{key:1})):(0,n.Q3)("",!0)])}const i={class:"navbar navbar-expand-lg navbar-dark bg-success"},s={class:"container-fluid"},l=(0,n.Lk)("a",{class:"navbar-brand",href:"#"},"Toma",-1),d=(0,n.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.Lk)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},m=(0,n.eW)("Lista"),v={class:"nav-item"},b=(0,n.eW)("Carga"),g={class:"nav-item"},f={class:"container-fluid mt-3"};function h(e,t,o,a,r,h){const k=(0,n.g2)("router-link"),L=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("nav",i,[(0,n.Lk)("div",s,[l,d,(0,n.Lk)("div",c,[(0,n.Lk)("ul",u,[(0,n.Lk)("li",p,[(0,n.bF)(k,{to:"/listar_toma",class:"nav-link",href:"#"},{default:(0,n.k6)((()=>[m])),_:1})]),(0,n.Lk)("li",v,[(0,n.bF)(k,{to:"/Toma",class:"nav-link",href:"#"},{default:(0,n.k6)((()=>[b])),_:1})]),(0,n.Lk)("li",g,[(0,n.Lk)("button",{class:"btn btn-danger ml-auto",onClick:t[0]||(t[0]=(...e)=>h.logout&&h.logout(...e))},"Cerrar sesión")])])])])]),(0,n.Lk)("div",f,[(0,n.bF)(L)])],64)}o(8743);var k={methods:{logout(){localStorage.removeItem("token"),this.$router.push("/")}}},L=o(1241);const y=(0,L.A)(k,[["render",h]]);var D=y,C=o(144),I=o(1387),w={components:{Navbar:D},setup(){const e=(0,I.lq)(),t=(0,C.EW)((()=>"Login"===e.name));return{isLoginPage:t}}};const _=(0,L.A)(w,[["render",r]]);var P=_,S=o(4232);const V={class:"form-container"},F=(0,n.Lk)("h2",null,"Carga de Productos",-1),E=(0,n.Lk)("label",{for:"fecha_toma"},"Fecha Toma:",-1),x=(0,n.Lk)("label",{for:"id_producto"},"Ubicación:",-1),$=(0,n.Lk)("label",{for:"producto"},"Producto:",-1),U=(0,n.Lk)("label",{for:"descripcion"},"Descripción de Producto:",-1),q=(0,n.Lk)("label",{for:"q"},"Cantidad (Q):",-1),O={key:0,class:"error"},T=(0,n.Lk)("label",{for:"centro"},"Centro:",-1),A=(0,n.Fv)('<option value="">Seleccione un centro</option><option value="C080">C080</option><option value="C152">C152</option><option value="C154">C154</option><option value="C200">C200</option><option value="C201">C201</option>',6),B=[A],J=(0,n.Lk)("label",{for:"lote"},"Lote:",-1),M=(0,n.Fv)('<option value="">Seleccione un lote</option><option value="Reparado">Reparado</option><option value="Nuevo">Nuevo</option><option value="Garantia">Garantía</option><option value="Observado">Observado</option>',5),X=[M],j=(0,n.Lk)("label",{for:"unidad_medida"},"Unidad de Medida Base:",-1),N=(0,n.Lk)("label",{for:"codigo_invent"},"Código de Inventario:",-1),Q=(0,n.Lk)("br",null,null,-1),R={key:1,class:"form-fields mt-3"},z={class:"mb-3"},W=(0,n.Lk)("label",{for:"observacion",class:"form-label"},"Observación:",-1),K={class:"mb-3"},G=(0,n.Lk)("label",{for:"medida",class:"form-label"},"Medida:",-1),Y={class:"mb-3"},H=(0,n.Lk)("label",{for:"fecha_venc",class:"form-label"},"Fecha de Vencimiento:",-1),Z={key:0,class:"error"},ee=(0,n.Lk)("br",null,null,-1),te=["disabled"];function oe(e,t,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",V,[F,(0,n.Lk)("form",{onSubmit:t[16]||(t[16]=(0,a.D$)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[E,(0,n.bo)((0,n.Lk)("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=e=>i.productData.fechaToma=e),required:"",disabled:""},null,512),[[a.Jo,i.productData.fechaToma]]),x,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"id_producto","onUpdate:modelValue":t[1]||(t[1]=e=>i.productData.ubicacion=e),required:"",placeholder:"00-00-000-000",autofocus:"",onKeydown:t[2]||(t[2]=e=>s.handlePdaInput("ubicacion",e))},null,544),[[a.Jo,i.productData.ubicacion]]),$,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>i.productData.producto=e),onInput:t[4]||(t[4]=(...e)=>s.buscarProducto&&s.buscarProducto(...e)),required:"",class:(0,S.C4)({"is-invalid":""===i.productData.producto}),onKeydown:t[5]||(t[5]=e=>s.handlePdaInput("producto",e))},null,34),[[a.Jo,i.productData.producto]]),U,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>i.productData.descripcionProducto=e),required:"",readonly:""},null,512),[[a.Jo,i.productData.descripcionProducto]]),q,(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>i.productData.cantidad=e),required:"",min:"1",class:(0,S.C4)({"is-invalid":i.productData.cantidad<=0})},null,2),[[a.Jo,i.productData.cantidad]]),i.productData.cantidad<=0?((0,n.uX)(),(0,n.CE)("span",O,"La cantidad debe ser mayor que 0.")):(0,n.Q3)("",!0),T,(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[8]||(t[8]=e=>i.productData.centro=e),class:"form-select",required:""},B,512),[[a.u1,i.productData.centro]]),J,(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[9]||(t[9]=e=>i.productData.lote=e),class:"form-select",required:""},X,512),[[a.u1,i.productData.lote]]),j,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=e=>i.productData.unidadMedidaBase=e),required:"",readonly:""},null,512),[[a.Jo,i.productData.unidadMedidaBase]]),N,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>i.productData.codigoInventario=e),required:"",class:(0,S.C4)({"is-invalid":""===i.productData.codigoInventario})},null,2),[[a.Jo,i.productData.codigoInventario]]),Q,(0,n.Lk)("button",{onClick:t[12]||(t[12]=(...e)=>s.toggleFields&&s.toggleFields(...e)),type:"button",class:"btn btn-primary"},[(0,n.Lk)("i",{class:(0,S.C4)(["fa",i.showFields?"fa-minus":"fa-plus"])},null,2)]),i.showFields?((0,n.uX)(),(0,n.CE)("div",R,[(0,n.Lk)("div",z,[W,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=e=>i.productData.observacion=e),id:"observacion",class:"form-control"},null,512),[[a.Jo,i.productData.observacion]])]),(0,n.Lk)("div",K,[G,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[14]||(t[14]=e=>i.productData.medida=e),id:"medida",class:"form-control"},null,512),[[a.Jo,i.productData.medida]])]),(0,n.Lk)("div",Y,[H,(0,n.bo)((0,n.Lk)("input",{type:"date","onUpdate:modelValue":t[15]||(t[15]=e=>i.productData.fechaVencimiento=e),id:"fecha_venc",class:(0,S.C4)(["form-control",{"is-invalid":!s.validarFechaVencimiento}])},null,2),[[a.Jo,i.productData.fechaVencimiento]]),s.validarFechaVencimiento?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("span",Z,"La fecha de vencimiento no puede ser anterior a la fecha actual."))])])):(0,n.Q3)("",!0),ee,(0,n.Lk)("button",{type:"submit",disabled:!s.formValido},"Cargar Producto",8,te)],32)])}o(9078);var ae=o(4373),ne={data(){return{showFields:!1,productData:{fechaToma:(new Date).toISOString().substr(0,10),ubicacion:"",producto:"",descripcionProducto:"",cantidad:0,centro:"",lote:"",unidadMedidaBase:"",codigoInventario:"",observacion:"",medida:"",fechaVencimiento:""},scannedCode:""}},computed:{validarFechaVencimiento(){const e=(new Date).toISOString().split("T")[0];return""===this.productData.fechaVencimiento||this.productData.fechaVencimiento>=e},formValido(){return""!==this.productData.producto&&this.productData.cantidad>0&&""!==this.productData.centro&&""!==this.productData.codigoInventario&&this.validarFechaVencimiento}},methods:{handlePdaInput(e,t){if("Enter"===t.key){const o=t.target.value.trim();"ubicacion"===e?this.productData.ubicacion=o:"producto"===e?(this.productData.producto=o,this.buscarProducto()):"codigoInventario"===e&&(this.productData.codigoInventario=o),t.target.value=""}},async buscarProducto(){if(this.productData.producto&&""!==this.productData.producto.trim())try{const e=this.productData.producto,t=e.replace(/\\/g,""),o=this.getCredentials(),a=await ae.A.get(`https://d19c-181-176-109-201.ngrok-free.app/api/products/b_name/${t}`,{headers:{"ngrok-skip-browser-warning":"true",Authorization:`Basic ${o}`}});if(200===a.status){const e=a.data;if(console.log("Datos recibidos:",e),Array.isArray(e)&&e.length>0){const t=e[0];this.productData.descripcionProducto=t.descriptionProduct,this.productData.unidadMedidaBase=t.unitMeasurement}else console.error("No se encontraron productos para el código proporcionado."),this.productData.descripcionProducto="",this.productData.unidadMedidaBase=""}else console.error("Error al obtener los datos del producto:",a.status,a.statusText)}catch(e){console.error("Error al realizar la solicitud:",e.response?e.response.data:e.message),alert("Error: "+(e.response?e.response.status+" - "+e.response.statusText:e.message))}else alert("Por favor, ingresa un código de producto válido.")},getCredentials(){const e=localStorage.getItem("username"),t=localStorage.getItem("password");return btoa(`${e}:${t}`)},async submitForm(){try{const e=localStorage.getItem("username"),t=localStorage.getItem("password"),o=btoa(`${e}:${t}`),a=await fetch("https://d19c-181-176-109-201.ngrok-free.app/api/tomas",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Basic ${o}`},body:JSON.stringify(this.productData)});a.ok?(alert("Producto cargado exitosamente"),this.resetForm()):alert("Error al cargar el producto")}catch(e){console.error("Error:",e)}},getCurrentDate(){const e=new Date,t=e.getFullYear(),o=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return`${t}-${o}-${a}`},toggleFields(){this.showFields=!this.showFields},resetForm(){this.productData={fechaToma:this.getCurrentDate(),ubicacion:"",producto:"",descripcionProducto:"",cantidad:0,centro:"",lote:"",unidadMedidaBase:"",codigoInventario:"",observacion:"",medida:"",fechaVencimiento:""},this.showFields=!1}}};const re=(0,L.A)(ne,[["render",oe]]);var ie=re;const se=e=>((0,n.Qi)("data-v-2284e238"),e=e(),(0,n.jt)(),e),le={class:"container"},de={class:"forms-container"},ce=(0,n.Fv)('<div class="form-control signup-form" data-v-2284e238><form action="#" data-v-2284e238><h2 data-v-2284e238>Registro</h2><input type="text" placeholder="Nombre de usuario" required data-v-2284e238><input type="email" placeholder="Correo electrónico" required data-v-2284e238><input type="password" placeholder="Contraseña" required data-v-2284e238><input type="password" placeholder="Confirmar contraseña" required data-v-2284e238><button data-v-2284e238>Registrarse</button></form><span data-v-2284e238>o iniciar sesión con</span><div class="socials" data-v-2284e238><i class="fab fa-facebook-f" data-v-2284e238></i><i class="fab fa-google-plus-g" data-v-2284e238></i><i class="fab fa-linkedin-in" data-v-2284e238></i></div></div>',1),ue={class:"form-control signin-form"},pe=se((()=>(0,n.Lk)("h1",null,"Login",-1))),me=se((()=>(0,n.Lk)("span",null,"o iniciar sesión con",-1))),ve=se((()=>(0,n.Lk)("div",{class:"socials"},[(0,n.Lk)("i",{class:"fab fa-facebook-f"}),(0,n.Lk)("i",{class:"fab fa-google-plus-g"}),(0,n.Lk)("i",{class:"fab fa-linkedin-in"})],-1))),be=(0,n.Fv)('<div class="intros-container" data-v-2284e238><div class="intro-control signin-intro" data-v-2284e238><div class="intro-control__inner" data-v-2284e238><h2 data-v-2284e238>¡Bienvenido!</h2><p data-v-2284e238> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae ullam omnis maxime, ex tempore! Officia ipsam illum facilis, fugiat accusantium laborum cupiditate distinctio commodi? Amet aliquam est exercitationem odit? </p><button id="signup-btn" data-v-2284e238>¿No tienes una cuenta aún? Regístrate.</button></div></div><div class="intro-control signup-intro" data-v-2284e238><div class="intro-control__inner" data-v-2284e238><h2 data-v-2284e238>¡Regístrate en CGM Rental!</h2><p data-v-2284e238> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum delectus odio neque vel adipisci sint rem quo tempora sunt quisquam possimus eos molestias, doloribus dolorum cupiditate aspernatur temporibus totam. </p><button id="signin-btn" data-v-2284e238>¿Ya tienes una cuenta? Inicia sesión.</button></div></div></div>',1);function ge(e,t,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",le,[(0,n.Lk)("div",de,[ce,(0,n.Lk)("div",ue,[(0,n.Lk)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...e)=>s.login&&s.login(...e)),["prevent"]))},[(0,n.Lk)("div",null,[pe,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),placeholder:"Username"},null,512),[[a.Jo,i.username]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),type:"password",placeholder:"Password"},null,512),[[a.Jo,i.password]]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.login&&s.login(...e))},"Login")])],32),me,ve])]),be])}var fe={data(){return{username:"",password:""}},mounted(){const e=document.getElementById("signup-btn"),t=document.getElementById("signin-btn"),o=document.querySelector(".container");e.addEventListener("click",(()=>{o.classList.toggle("change")})),t.addEventListener("click",(()=>{o.classList.toggle("change")}))},methods:{login(){const e=btoa(`${this.username}:${this.password}`);localStorage.setItem("username",this.username),localStorage.setItem("password",this.password),ae.A.post("https://d19c-181-176-109-201.ngrok-free.app/login",{},{headers:{Authorization:`Basic ${e}`}}).then((e=>{console.log(e.data),this.$router.push("/toma")})).catch((e=>{console.error("Error:",e)}))}}};const he=(0,L.A)(fe,[["render",ge],["__scopeId","data-v-2284e238"]]);var ke=he;const Le=e=>((0,n.Qi)("data-v-03df60a3"),e=e(),(0,n.jt)(),e),ye={class:"container"},De={class:"row"},Ce={class:"col-lg-8 col-md-12"},Ie=Le((()=>(0,n.Lk)("h2",null,"Listado de Productos",-1))),we={class:"table-responsive"},_e={class:"table table-bordered table-hover"},Pe=Le((()=>(0,n.Lk)("thead",{class:"thead-light"},[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"#"),(0,n.Lk)("th",null,"Producto"),(0,n.Lk)("th",null,"Descripción de Producto"),(0,n.Lk)("th",null,"Ubicación"),(0,n.Lk)("th",null,"Fecha Toma"),(0,n.Lk)("th",null,"Centro"),(0,n.Lk)("th",null,"Lote"),(0,n.Lk)("th",null,"Cantidad")])],-1))),Se={key:0},Ve=Le((()=>(0,n.Lk)("td",{colspan:"8",class:"text-center"},"No hay datos disponibles",-1))),Fe=[Ve],Ee=["onClick"],xe={key:0,class:"col-lg-4 col-md-12"},$e={class:"details-panel card"},Ue={class:"card-body"},qe=Le((()=>(0,n.Lk)("h5",{class:"card-title"},"Detalles del Producto",-1))),Oe={class:"form-group"},Te=Le((()=>(0,n.Lk)("label",{for:"unidad_medida_base"},"Unidad de Medida Base:",-1))),Ae={class:"form-group"},Be=Le((()=>(0,n.Lk)("label",{for:"codigo_invent"},"Código de Inventario:",-1))),Je={class:"form-group"},Me=Le((()=>(0,n.Lk)("label",{for:"observacion"},"Observación:",-1))),Xe={class:"form-group"},je=Le((()=>(0,n.Lk)("label",{for:"medida"},"Medida:",-1))),Ne={class:"form-group"},Qe=Le((()=>(0,n.Lk)("label",{for:"fecha_venc"},"Fecha de Vencimiento:",-1))),Re={class:"button-group mt-3"};function ze(e,t,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",ye,[(0,n.Lk)("div",De,[(0,n.Lk)("div",Ce,[Ie,(0,n.Lk)("div",we,[(0,n.Lk)("table",_e,[Pe,(0,n.Lk)("tbody",null,[0===i.tomas.length?((0,n.uX)(),(0,n.CE)("tr",Se,Fe)):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tomas,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t,onClick:t=>s.selectRow(e),class:(0,S.C4)({"table-active":i.selectedItem===e})},[(0,n.Lk)("td",null,(0,S.v_)(t+1),1),(0,n.Lk)("td",null,(0,S.v_)(e.producto),1),(0,n.Lk)("td",null,(0,S.v_)(e.descripcionProducto),1),(0,n.Lk)("td",null,(0,S.v_)(e.ubicacion),1),(0,n.Lk)("td",null,(0,S.v_)(s.formatDate(e.fechaToma)),1),(0,n.Lk)("td",null,(0,S.v_)(e.centro),1),(0,n.Lk)("td",null,(0,S.v_)(e.lote),1),(0,n.Lk)("td",null,(0,S.v_)(e.cantidad),1)],10,Ee)))),128))])])])]),i.selectedItem?((0,n.uX)(),(0,n.CE)("div",xe,[(0,n.Lk)("div",$e,[(0,n.Lk)("div",Ue,[qe,(0,n.Lk)("button",{class:"close",onClick:t[0]||(t[0]=(...e)=>s.closePanel&&s.closePanel(...e))},"×"),(0,n.Lk)("form",{onSubmit:t[7]||(t[7]=(0,a.D$)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"])),class:"details-form"},[(0,n.Lk)("div",Oe,[Te,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>i.selectedItem.unidadMedidaBase=e),disabled:""},null,512),[[a.Jo,i.selectedItem.unidadMedidaBase]])]),(0,n.Lk)("div",Ae,[Be,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>i.selectedItem.codigoInventario=e),disabled:""},null,512),[[a.Jo,i.selectedItem.codigoInventario]])]),(0,n.Lk)("div",Je,[Me,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>i.selectedItem.observacion=e),disabled:""},null,512),[[a.Jo,i.selectedItem.observacion]])]),(0,n.Lk)("div",Xe,[je,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>i.selectedItem.medida=e),disabled:""},null,512),[[a.Jo,i.selectedItem.medida]])]),(0,n.Lk)("div",Ne,[Qe,(0,n.bo)((0,n.Lk)("input",{type:"date",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=e=>i.selectedItem.fechaVencimiento=e),disabled:""},null,512),[[a.Jo,i.selectedItem.fechaVencimiento]])]),(0,n.Lk)("div",Re,[(0,n.Lk)("button",{class:"btn btn-danger",onClick:t[6]||(t[6]=e=>s.deleteItem(i.selectedItem.id)),type:"button"},"Eliminar")])],32)])])])):(0,n.Q3)("",!0)])])}var We={data(){return{tomas:[],selectedItem:null}},mounted(){this.obtenerTomas()},methods:{async obtenerTomas(){try{const e=localStorage.getItem("username"),t=localStorage.getItem("password"),o=btoa(`${e}:${t}`),a=await ae.A.get("https://d19c-181-176-109-201.ngrok-free.app/api/tomas",{headers:{"ngrok-skip-browser-warning":"true",Authorization:`Basic ${o}`}});console.log("Datos obtenidos:",a.data),this.tomas=a.data,console.log("Número de registros:",this.tomas.length)}catch(e){console.error("Error al obtener los datos:",e)}},selectRow(e){this.selectedItem=e},editItem(){alert("Editando el producto: "+this.selectedItem.producto)},async deleteItem(e){if(confirm("¿Estás seguro de que deseas eliminar este producto?"))try{const t=localStorage.getItem("username"),o=localStorage.getItem("password"),a=btoa(`${t}:${o}`);await ae.A.delete(`https://d19c-181-176-109-201.ngrok-free.app/api/tomas/${e}`,{headers:{"ngrok-skip-browser-warning":"true",Authorization:`Basic ${a}`}}),this.tomas=this.tomas.filter((t=>t.id!==e)),this.selectedItem=null,alert("Producto eliminado con éxito.")}catch(t){console.error("Error al eliminar el producto:",t),alert("Hubo un problema al eliminar el producto.")}},closePanel(){this.selectedItem=null},formatDate(e){return e?new Date(e).toLocaleDateString():""}}};const Ke=(0,L.A)(We,[["render",ze],["__scopeId","data-v-03df60a3"]]);var Ge=Ke;const Ye=[{path:"/",name:"Login",component:ke},{path:"/toma",name:"Toma",component:ie},{path:"/listar_toma",name:"listar_toma",component:Ge}],He=(0,I.aE)({history:(0,I.LA)("/Consumiapi/"),routes:Ye});var Ze=He,et=o(782),tt=(0,et.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});o(9313),o(5707);(0,a.Ef)(P).use(tt).use(Ze).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,i=a[0],s=a[1],l=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(t&&t(a);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self["webpackChunkproduts_vue"]=self["webpackChunkproduts_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(8001)}));a=o.O(a)})();
//# sourceMappingURL=app.72c9295c.js.map