// SPDX-FileCopyrightText: 2019-2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

//configure tms
var wapLocalCode = 'us-en';
//dynamically set per localized site, see mapping table for values
var wapSection = "oneapi";
//load tms
(function() {
	var host = (window.document.location.protocol == 'http:') ? "http://www.intel.com" : "https://www.intel.com";
	var url = host+"/content/dam/www/global/wap/tms-loader.js"; //wap file url
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = url;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();

window.MathJax = {
    TeX: {
	Macros: {
	    src: '\\operatorname{src}',
	    srclayer: '\\operatorname{src\\_layer}',
	    srciter: '\\operatorname{src\\_iter}',
	    srciterc: '\\operatorname{src\\_iter\\_c}',
	    weights: '\\operatorname{weights}',
	    weightslayer: '\\operatorname{weights\\_layer}',
	    weightsiter: '\\operatorname{weights\\_iter}',
	    weightspeephole: '\\operatorname{weights\\_peephole}',
	    weightsprojection: '\\operatorname{weights\\_projection}',
	    bias: '\\operatorname{bias}',
	    dst: '\\operatorname{dst}',
	    dstlayer: '\\operatorname{dst\\_layer}',
	    dstiter: '\\operatorname{dst\\_iter}',
	    dstiterc: '\\operatorname{dst\\_iter\\_c}',
	    diffsrc: '\\operatorname{diff\\_src}',
	    diffsrclayer: '\\operatorname{diff\\_src\\_layer}',
	    diffsrciter: '\\operatorname{diff\\_src\\_iter}',
	    diffsrciterc: '\\operatorname{diff\\_src\\_iter\\_c}',
	    diffweights: '\\operatorname{diff\\_weights}',
	    diffweightslayer: '\\operatorname{diff\\_weights\\_layer}',
	    diffweightsiter: '\\operatorname{diff\\_weights\\_iter}',
	    diffweightspeephole: '\\operatorname{diff\\_weights\\_peephole}',
	    diffweightsprojection: '\\operatorname{diff\\_weights\\_projection}',
	    diffbias: '\\operatorname{diff\\_bias}',
	    diffdst: '\\operatorname{diff\\_dst}',
	    diffdstlayer: '\\operatorname{diff\\_dst\\_layer}',
	    diffdstiter: '\\operatorname{diff\\_dst\\_iter}',
	    diffdstiterc: '\\operatorname{diff\\_dst\\_iter\\_c}',
	    diffgamma: '\\operatorname{diff\\_\\gamma}',
	    diffbeta: '\\operatorname{diff\\_\\beta}',
	    workspace: '\\operatorname{workspace}'
	}
    }
}
