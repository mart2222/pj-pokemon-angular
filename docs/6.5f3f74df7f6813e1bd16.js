(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1DpX":function(e,t,n){"use strict";n.r(t),n.d(t,"PokemonModule",function(){return C});var o=n("ofXK"),i=n("PCNd"),s=n("tyNb"),c=n("fXoL"),r=n("mrSG"),a=n("nYR2"),p=n("IzEk"),m=n("/Gy6"),b=n("cr+a"),l=n("Lm2G"),d=n("3Pt+"),g=n("LDWA");function u(e,t){if(1&e&&(c.Qb(0,"div",11),c.Lb(1,"app-card-pokemon",12),c.Pb()),2&e){const e=t.$implicit;c.zb(1),c.cc("item",e)}}function k(e,t){if(1&e){const e=c.Rb();c.Ob(0),c.Qb(1,"div",7),c.oc(2,u,2,1,"div",8),c.Pb(),c.Qb(3,"div",9),c.Qb(4,"pagination",10),c.Xb("ngModelChange",function(t){return c.jc(e),c.Zb().currentPage=t})("pageChanged",function(t){return c.jc(e),c.Zb().pageChanged(t)}),c.Pb(),c.Pb(),c.Nb()}if(2&e){const e=c.Zb();c.zb(2),c.cc("ngForOf",e.pokemonContent.results),c.zb(2),c.cc("boundaryLinks",!0)("totalItems",e.pokemonContent.count)("ngModel",e.currentPage)("maxSize",5)}}function f(e,t){1&e&&c.Lb(0,"div",13)}let P=(()=>{class e{constructor(e,t){this.pokemonService=e,this.pokemonTempService=t,this.currentPage=1}ngOnInit(){this.getListaPokemons()}getListaPokemons(){this.pokemonService.listPokemon(this.currentPage).pipe(Object(a.a)(()=>this.loadingListaPokemon=!1),Object(p.a)(1)).subscribe(e=>Object(r.a)(this,void 0,void 0,function*(){if(e.results){const t=[],n=this.pokemonTempService.getFavoritoPokemon(),o=yield e.results.map(e=>Object(r.a)(this,void 0,void 0,function*(){t.push(Object.assign(Object.assign({},e),{nomePokemon:this.getNomePokemon(e.name),favorito:n.includes(e.name),getDetails:()=>this.pokemonTempService.getDetailPokemon(e.name)}))}));yield Promise.all(o),e.results=t}this.pokemonContent=e}))}pageChanged(e){this.currentPage=e.page,this.getListaPokemons()}getNomePokemon(e){const t=e.split("-").join(" ");return t.charAt(0).toUpperCase()+t.slice(1)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(m.a),c.Kb(b.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-list-pokemon"]],decls:9,vars:2,consts:[[1,"list-pokemon"],[1,"container"],[1,"text-center"],[1,"list-pokemon_title","text-uppercase"],[1,"text-muted"],[4,"ngIf"],["class","spinner-border",4,"ngIf"],[1,"row"],["class","col-lg-3 col-sm-4 mb-3",4,"ngFor","ngForOf"],[1,"row","justify-content-center"],["firstText","In\xedcio","nextText","Pr\xf3ximo","previousText","Anterior","lastText","\xdaltimo",3,"boundaryLinks","totalItems","ngModel","maxSize","ngModelChange","pageChanged"],[1,"col-lg-3","col-sm-4","mb-3"],[3,"item"],[1,"spinner-border"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"h2",3),c.qc(4,"Pok\xe9mons"),c.Pb(),c.Qb(5,"h3",4),c.qc(6,"Listagem dos pok\xe9mons"),c.Pb(),c.Pb(),c.oc(7,k,5,5,"ng-container",5),c.oc(8,f,1,0,"div",6),c.Pb(),c.Pb()),2&e&&(c.zb(7),c.cc("ngIf",t.pokemonContent),c.zb(1),c.cc("ngIf",t.loadingListaPokemon))},directives:[o.j,o.i,l.a,d.c,d.d,g.a],styles:[".list-pokemon[_ngcontent-%COMP%]{padding:20px 0}.list-pokemon_title[_ngcontent-%COMP%]{color:#6539dd;font-weight:600}"]}),e})();const h=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-pokemon"]],decls:2,vars:0,consts:[["id","listaPokemon",1,"page-section","bg-light"]],template:function(e,t){1&e&&(c.Qb(0,"section",0),c.Lb(1,"app-list-pokemon"),c.Pb())},directives:[P],encapsulation:2}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[s.b.forChild(h)],s.b]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({providers:[],imports:[[o.b,i.a,v]]}),e})()}}]);