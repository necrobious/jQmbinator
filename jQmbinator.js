/*
 * jQmbinator JavaScript Library v0.0.1
 *
 * Copyright 2010, Kirk Peterson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license 
 */
function elAt(attrs) {
    var s = '';
    for (var key in attrs) {
        var k = key;
        if (key === 'clazz') {k = 'class';}
        s = s + ' ' + k + '="' + attrs[key] + '"';
  	}
    return s;
}

function el() {
    var arglen = (arguments) ? arguments.length : 0;
    var openBracket = '<'+this.eln;
    var closeBracket = (this.empty || arglen == 0) ? '/>' : '>';
    
    var jq;

    var isArray = function (value) {
      return (typeof value.length === 'number' && !(value.propertyIsEnumerable('length')) && typeof value.splice === 'function')
    }

    // handle void elements without children 
    if (arglen == 0) {
    	jq = jQuery(openBracket + closeBracket);
		jq.jQmbinator = '0.0.1';
		return jq;
    }
    
    // Otherwise, handle args
    for (var i = 0; i<arguments.length; i++) {
        var child = arguments[i];
        var type = typeof child;

        // skip null values
        if (!child) {continue;}

        var is_array = isArray(child);

        // set the opening tag, with its attrs
        if (i === 0) {
            // element w/  attributes
            if (type === 'object' && !child.jquery && !is_array) { 
                jq = jQuery(openBracket + elAt(child) + closeBracket);
                jq.jQmbinator = '0.0.1';
                continue;
            }
            // element w/o atributes
            else { 
                jq = jQuery(openBracket + closeBracket);
                jq.jQmbinator = '0.0.1';
            }
        }
		
        // only funcitons, strings, jQs, or an array-of get appended
        if (type === 'object' && !is_array && !child.jquery) {continue;} 
      
        // pluralize the child, to normalize handling between scalars and arrays 
        var kids = (is_array) ? child : [child];
        for (var j = 0; j<kids.length; j++) { 
            var kid = kids[j];
            var childType = typeof kid;

            if (childType === 'string' || kid.jquery) jq.append(kid);
            if (childType === 'function') jq.append(kid());
        }
    }
    return jq;
}

function a() {this.eln="a"; this.empty = false; return el.apply(this, arguments);}
function abbr() {this.eln="abbr"; this.empty = false; return el.apply(this, arguments);}
function address() {this.eln="address"; this.empty = false; return el.apply(this, arguments);}
function area() {this.eln="area"; this.empty = true; return el.apply(this, arguments);}
function article() {this.eln="article"; this.empty = false; return el.apply(this, arguments);}
function aside() {this.eln="aside"; this.empty = false; return el.apply(this, arguments);}
function audio() {this.eln="audio"; this.empty = false; return el.apply(this, arguments);}
function b() {this.eln="b"; this.empty = false; return el.apply(this, arguments);}
function base() {this.eln="base"; this.empty = true; return el.apply(this, arguments);}
function bdo() {this.eln="bdo"; this.empty = false; return el.apply(this, arguments);}
function blockquote() {this.eln="blockquote"; this.empty = false; return el.apply(this, arguments);}
function body() {this.eln="body"; this.empty = false; return el.apply(this, arguments);}
function br() {this.eln="br"; this.empty = true; return el.apply(this, arguments);}
function button() {this.eln="button"; this.empty = false; return el.apply(this, arguments);}
function canvas() {this.eln="canvas"; this.empty = false; return el.apply(this, arguments);}
function caption() {this.eln="caption"; this.empty = false; return el.apply(this, arguments);}
function cite() {this.eln="cite"; this.empty = false; return el.apply(this, arguments);}
function code() {this.eln="code"; this.empty = false; return el.apply(this, arguments);}
function col() {this.eln="col"; this.empty = true; return el.apply(this, arguments);}
function colgroup() {this.eln="colgroup"; this.empty = false; return el.apply(this, arguments);}
function command() {this.eln="command"; this.empty = true; return el.apply(this, arguments);}
function datalist() {this.eln="datalist"; this.empty = false; return el.apply(this, arguments);}
function dd() {this.eln="dd"; this.empty = false; return el.apply(this, arguments);}
function del() {this.eln="del"; this.empty = false; return el.apply(this, arguments);}
function details() {this.eln="details"; this.empty = false; return el.apply(this, arguments);}
function device() {this.eln="device"; this.empty = false; return el.apply(this, arguments);}
function dfn() {this.eln="dfn"; this.empty = false; return el.apply(this, arguments);}
function div() {this.eln="div"; this.empty = false; return el.apply(this, arguments);}
function dl() {this.eln="dl"; this.empty = false; return el.apply(this, arguments);}
function dt() {this.eln="dt"; this.empty = false; return el.apply(this, arguments);}
function em() {this.eln="em"; this.empty = false; return el.apply(this, arguments);}
function embed() {this.eln="embed"; this.empty = true; return el.apply(this, arguments);}
function fieldset() {this.eln="fieldset"; this.empty = false; return el.apply(this, arguments);}
function figcaption() {this.eln="figcaption"; this.empty = false; return el.apply(this, arguments);}
function figure() {this.eln="figure"; this.empty = false; return el.apply(this, arguments);}
function footer() {this.eln="footer"; this.empty = false; return el.apply(this, arguments);}
function form() {this.eln="form"; this.empty = false; return el.apply(this, arguments);}
function h1() {this.eln="h1"; this.empty = false; return el.apply(this, arguments);}
function h2() {this.eln="h2"; this.empty = false; return el.apply(this, arguments);}
function h3() {this.eln="h3"; this.empty = false; return el.apply(this, arguments);}
function h4() {this.eln="h4"; this.empty = false; return el.apply(this, arguments);}
function h5() {this.eln="h5"; this.empty = false; return el.apply(this, arguments);}
function h6() {this.eln="h6"; this.empty = false; return el.apply(this, arguments);}
function head() {this.eln="head"; this.empty = false; return el.apply(this, arguments);}
function header() {this.eln="header"; this.empty = false; return el.apply(this, arguments);}
function hgroup() {this.eln="hgroup"; this.empty = false; return el.apply(this, arguments);}
function hr() {this.eln="hr"; this.empty = true; return el.apply(this, arguments);}
function html() {this.eln="html"; this.empty = false; return el.apply(this, arguments);}
function i() {this.eln="i"; this.empty = false; return el.apply(this, arguments);}
function iframe() {this.eln="iframe"; this.empty = false; return el.apply(this, arguments);}
function img() {this.eln="img"; this.empty = true; return el.apply(this, arguments);}
function input() {this.eln="input"; this.empty = true; return el.apply(this, arguments);}
function ins() {this.eln="ins"; this.empty = false; return el.apply(this, arguments);}
function kbd() {this.eln="kbd"; this.empty = false; return el.apply(this, arguments);}
function keygen() {this.eln="keygen"; this.empty = true; return el.apply(this, arguments);}
function label() {this.eln="label"; this.empty = false; return el.apply(this, arguments);}
function legend() {this.eln="legend"; this.empty = false; return el.apply(this, arguments);}
function li() {this.eln="li"; this.empty = false; return el.apply(this, arguments);}
function link() {this.eln="link"; this.empty = true; return el.apply(this, arguments);}
function map() {this.eln="map"; this.empty = false; return el.apply(this, arguments);}
function mark() {this.eln="mark"; this.empty = false; return el.apply(this, arguments);}
function menu() {this.eln="menu"; this.empty = false; return el.apply(this, arguments);}
function meta() {this.eln="meta"; this.empty = true; return el.apply(this, arguments);}
function meter() {this.eln="meter"; this.empty = false; return el.apply(this, arguments);}
function nav() {this.eln="nav"; this.empty = false; return el.apply(this, arguments);}
function noscript() {this.eln="noscript"; this.empty = false; return el.apply(this, arguments);}
function object() {this.eln="object"; this.empty = false; return el.apply(this, arguments);}
function ol() {this.eln="ol"; this.empty = false; return el.apply(this, arguments);}
function optgroup() {this.eln="optgroup"; this.empty = false; return el.apply(this, arguments);}
function option() {this.eln="option"; this.empty = false; return el.apply(this, arguments);}
function output() {this.eln="output"; this.empty = false; return el.apply(this, arguments);}
function p() {this.eln="p"; this.empty = false; return el.apply(this, arguments);}
function param() {this.eln="param"; this.empty = true; return el.apply(this, arguments);}
function pre() {this.eln="pre"; this.empty = false; return el.apply(this, arguments);}
function progress() {this.eln="progress"; this.empty = false; return el.apply(this, arguments);}
function q() {this.eln="q"; this.empty = false; return el.apply(this, arguments);}
function rp() {this.eln="rp"; this.empty = false; return el.apply(this, arguments);}
function rt() {this.eln="rt"; this.empty = false; return el.apply(this, arguments);}
function ruby() {this.eln="ruby"; this.empty = false; return el.apply(this, arguments);}
function samp() {this.eln="samp"; this.empty = false; return el.apply(this, arguments);}
function script() {this.eln="script"; this.empty = false; return el.apply(this, arguments);}
function section() {this.eln="section"; this.empty = false; return el.apply(this, arguments);}
function select() {this.eln="select"; this.empty = false; return el.apply(this, arguments);}
function small() {this.eln="small"; this.empty = false; return el.apply(this, arguments);}
function source() {this.eln="source"; this.empty = true; return el.apply(this, arguments);}
function span() {this.eln="span"; this.empty = false; return el.apply(this, arguments);}
function strong() {this.eln="strong"; this.empty = false; return el.apply(this, arguments);}
function style() {this.eln="style"; this.empty = false; return el.apply(this, arguments);}
function sub() {this.eln="sub"; this.empty = false; return el.apply(this, arguments);}
function summary() {this.eln="summary"; this.empty = false; return el.apply(this, arguments);}
function sup() {this.eln="sup"; this.empty = false; return el.apply(this, arguments);}
function table() {this.eln="table"; this.empty = false; return el.apply(this, arguments);}
function tbody() {this.eln="tbody"; this.empty = false; return el.apply(this, arguments);}
function td() {this.eln="td"; this.empty = false; return el.apply(this, arguments);}
function textarea() {this.eln="textarea"; this.empty = false; return el.apply(this, arguments);}
function tfoot() {this.eln="tfoot"; this.empty = false; return el.apply(this, arguments);}
function th() {this.eln="th"; this.empty = false; return el.apply(this, arguments);}
function thead() {this.eln="thead"; this.empty = false; return el.apply(this, arguments);}
function time() {this.eln="time"; this.empty = false; return el.apply(this, arguments);}
function title() {this.eln="title"; this.empty = false; return el.apply(this, arguments);}
function tr() {this.eln="tr"; this.empty = false; return el.apply(this, arguments);}
function track() {this.eln="track"; this.empty = false; return el.apply(this, arguments);}
function ul() {this.eln="ul"; this.empty = false; return el.apply(this, arguments);}
//function var() {this.eln="var"; this.empty = false; return el.apply(this, arguments);}
function video() {this.eln="video"; this.empty = false; return el.apply(this, arguments);}
function wbr() {this.eln="wbr"; this.empty = true; return el.apply(this, arguments);}
