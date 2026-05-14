var CURRENT_SETDEX = {};

var ALL_SETDEX_CUSTOM = {};

function loadSetdexScript() {
    console.log(ALL_SETDEX_CUSTOM[gen]);
    CURRENT_COMPONENTS = COMPONENTS[gen].concat(ALL_SETDEX_CUSTOM[gen]);

    if (Object.keys(ALL_SETDEX_CUSTOM[gen]).length)
        $(".set-checkbox").show();
    else
        $(".set-checkbox").hide();

    CURRENT_SETDEX = {};

    for (var i = 0; i < CURRENT_COMPONENTS.length; i++) {
        var sourceDex = CURRENT_COMPONENTS[i];
        if (sourceDex) {
            for (var p in sourceDex) {
                if (Object.prototype.hasOwnProperty.call(sourceDex, p)) {
                    if (!CURRENT_SETDEX[p]) {
                        CURRENT_SETDEX[p] = {};
                    }
                    var sourceSet = sourceDex[p];
                    var targetSet = CURRENT_SETDEX[p];
                    for (var setName in sourceSet) {
                        if (Object.prototype.hasOwnProperty.call(sourceSet, setName)) {
                            targetSet[setName] = sourceSet[setName];
                        }
                    }
                }
            }
        }
    }
    setdex = CURRENT_SETDEX;
}