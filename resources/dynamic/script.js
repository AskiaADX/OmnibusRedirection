(function () {
    "use strict";
    setTimeout(function () {
        {% dim q = CurrentADC.PropQuestion("questionState") %}
        const shouldRedirect ={%= On(q.Value HasNone {1}, "true", "false") %};
        if (shouldRedirect) {
            const el = document.getElementById("redirection{%= CurrentADC.InstanceId %}");
			document.write(el.value);
        } else {
            document.forms[0].submit();
        }
    }, 0);
}());