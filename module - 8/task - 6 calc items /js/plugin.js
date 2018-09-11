//  Author: Vlasenko Fedor, valsenkofedor@mail.ru
(function () {
    var plus = document.createElement("span");
    var minus = document.createElement("span");
    var div = document.createElement("div");

    div.className = "choice";
    plus.className = "plus";
    minus.className = "minus";
    plus.appendChild(document.createTextNode("+"));
    minus.appendChild(document.createTextNode("-"));
    div.appendChild(plus);
    div.appendChild(minus);

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (fn, scope) {
            for (var i = 0, len = this.length; i < len; ++i) {
                fn.call(scope, this[i], i, this);
            }
        };
    }

    HTMLCollection.prototype.forEach = NodeList.prototype.forEach
        = Array.prototype.forEach;

    function build(el) {
        var new_el = div.cloneNode(true);
        new_el.appendChild(el.cloneNode());
        el.parentNode.replaceChild(new_el, el);
    }

    function num_click(e) {
        var el = e ? e.target : window.event.srcElement;
        if (el.tagName !== "SPAN") return;

        var inp = this.lastChild;
        var val = +inp.value;
        inp.value = val +(el.className == "plus" ? 1: val > 0 ? -1 : 0);
    }

    function num_input(e) {
        var el = e ? e.target : window.event.srcElement;
        if (el.tagName !== "INPUT") return;
        var val = el.value.replace(/\D/g, '');
        el.value = val ? val : 0;
    }

    document.querySelectorAll('input.number').forEach(build);
    document.querySelectorAll('div.choice').forEach(function (el) {
        el.onclick = num_click;
        el.oninput = num_input;
    });
}());