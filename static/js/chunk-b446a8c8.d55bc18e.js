(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b446a8c8"],{1:function(e,t){},2:function(e,t){},"25ff":function(e,t,a){},3:function(e,t){},3796:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v(" Drop excel file here or "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v(" Browse ")])],1)])},r=[],l=(a("d3b7"),a("b0c0"),a("1146")),s=a.n(l),o={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.upload(a)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new Promise((function(a,n){var r=new FileReader;r.onload=function(e){var n=e.target.result,r=s.a.read(n,{type:"array"}),l=r.SheetNames[0],o=r.Sheets[l],i=t.getHeaderRow(o),c=s.a.utils.sheet_to_json(o);t.generateData({header:i,results:c}),t.loading=!1,a()},r.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,a=[],n=s.a.utils.decode_range(e["!ref"]),r=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var l=e[s.a.utils.encode_cell({c:t,r:r})],o="UNKNOWN "+t;l&&l.t&&(o=s.a.utils.format_cell(l)),a.push(o)}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},i=o,c=(a("67df"),a("2877")),u=Object(c["a"])(i,n,r,!1,null,"d2407dd6",null);t["a"]=u.exports},"67df":function(e,t,a){"use strict";a("25ff")},a137:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),a("el-tag",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{size:"medium"}},[e._v("数据预览")]),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1)],1)},r=[],l=(a("fb6a"),a("3796")),s={name:"UploadExcel",components:{UploadExcelComponent:l["a"]},data:function(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=t.slice(0,20),this.tableHeader=a}}},o=s,i=a("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports}}]);