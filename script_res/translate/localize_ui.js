(function () {
    const TEXT_MAP = {
        "Dark theme": "深色主题",
        "Light theme": "浅色主题",
        "National Dex": "全国图鉴",
        "Custom Mods": "自定义修正",
        "EVs": "努力值",
        "Stats": "实际能力",
        "Base": "种族值",
        "IVs": "个体值",
        "DVs": "个体值",
        "Stat Points": "能力点",
        "Attack": "攻击",
        "Defense": "防御",
        "Sp. Atk": "特攻",
        "Sp. Def": "特防",
        "Speed": "速度",
        "Level": "等级",
        "Type": "属性",
        "Tera Type": "太晶属性",
        "Ability": "特性",
        "Item": "道具",
        "Status": "状态",
        "Current HP": "当前 HP",
        "Weight": "体重",
        "Nature": "性格",
        "Move": "招式",
        "Power": "威力",
        "Hits": "击中",
        "Crit": "CT",
        "Terastalize": "太晶化",
        "1st Use": "首次使用",
        "None": "无",
        "(none)": "（无）",
        "(other)": "（其他）",
        "Off": "关闭",
        "Sun": "晴天",
        "Rain": "雨天",
        "Sand": "沙暴",
        "Hail": "冰雹",
        "Snow": "雪天",
        "Harsh Sun": "强烈日照",
        "Heavy Rain": "强降雨",
        "Strong Winds": "乱流",
        "Electric": "电气场地",
        "Grassy": "青草场地",
        "Misty": "薄雾场地",
        "Psychic": "精神场地",
        "Aura Break": "气场破坏",
        "Fairy Aura": "妖精气场",
        "Dark Aura": "暗黑气场",
        "Gravity": "重力",
        "Doubles": "双打",
        "Singles": "单打",
        "Save Set": "保存配置",
        "Export Team": "导出队伍",
        "Export Set": "导出配置",
        "Delete Set": "删除配置",
        "Import Sets": "导入配置",
        "Clear Field": "清空场地",
        "Blank Set": "空白配置",
        "Transform": "变身",
        "Dynamax": "极巨化",
        "Z-Move": "Z 招式",
        "2x BP": "2倍威力",
        "Helping Hand": "帮助",
        "Aurora Veil": "极光幕",
        "Reflect": "反射壁",
        "Light Screen": "光墙",
        "Tailwind": "顺风",
        "Sea of Fire": "火海",
        "Swamp": "湿地",
        "Friend Guard": "友情防守",
        "Stealth Rock": "隐形岩",
        "Spikes": "撒菱",
        "Steely Spirit": "钢之意志",
        "Power Spot": "能量点",
        "Battery": "蓄电池",
        "Salt Cure": "盐腌",
        "Commander": "发号施令",
        "Charge": "充电",
        "Please enter your custom set here.": "请在这里输入你的自定义配置。",
        "Spread Name:": "配置名称：",
        "My Custom Set": "我的自定义配置",
        "Save": "保存",
        "Delete All Custom Sets": "删除全部自定义配置",
        "Import to Left Team": "导入到左侧队伍",
        "Import to Right Team": "导入到右侧队伍",
        "If you encounter a bug, please report it!": "如果遇到 bug，请提交反馈。"
    };

    const STATUS_NAMES = {
        "Healthy": "健康",
        "Poisoned": "中毒",
        "Badly Poisoned": "剧毒",
        "Burned": "灼伤",
        "Paralyzed": "麻痹",
        "Asleep": "睡眠",
        "Frozen": "冰冻"
    };

    const TITLE_MAP = {
        "Select the generation.": "选择世代。",
        "Select a move to show detailed results.": "选择一个招式查看详细结果。",
        "Click to copy the result.": "点击复制结果。",
        "Rename the current team.": "重命名当前队伍。",
        "Transform this Pokémon into the opposing Pokémon? You can't save/export sets of this Pokémon while it's Transformed.": "变身为对面的宝可梦？变身状态下不能保存或导出该宝可梦配置。",
        "Overwrite this slot with what's currently in the panel.": "用当前面板里的配置覆盖这个槽位。",
        "Remove from the sidebar.": "从侧边栏移除。",
        "Add the current Pokémon to the sidebar.": "把当前宝可梦加入侧边栏。",
        "Export all Pokémon sets on the sidebar.": "导出侧边栏中的全部宝可梦配置。",
        "Remove all Pokémon sets on the sidebar.": "清空侧边栏中的全部宝可梦配置。",
        "Is this Ability active?": "这个特性是否生效？",
        "Click here to manually choose the boost. Will be done automatically otherwise.": "手动选择提升项；不选则自动判断。",
        "Dynamax this Pokémon?": "让这只宝可梦极巨化？",
        "Give this Pokémon the Gigantamax factor?": "给予这只宝可梦超极巨化因子？",
        "Terastalize this Pokémon?": "让这只宝可梦太晶化？",
        "Force this attack to be a critical hit?": "强制本次攻击击中要害？",
        "Use the corresponding Z-Move?": "使用对应的 Z 招式？",
        "Force this attack to deal double damage?": "强制本次攻击造成 2 倍伤害？",
        "Is this the first time using a move of this type after Terastalizing?": "太晶化后是否首次使用该属性招式？",
        "Apply double damage from using Glaive Rush?": "应用巨剑突击后的 2 倍受伤效果？",
        "Select the battle format.": "选择对战规则。",
        "Select the current terrain.": "选择当前场地。",
        "Select the current weather condition.": "选择当前天气。",
        "Select the current radiating aura.": "选择当前生效的气场。",
        "Select the current active Ruin abilities.": "选择当前生效的灾祸特性。",
        "Is gravity in effect?": "重力是否生效？",
        "Is this Pokémon protecting?": "这只宝可梦是否守住？",
        "Has this Pokémon's power been boosted by an ally's Helping Hand?": "这只宝可梦是否受到队友帮助提升威力？",
        "Is this Pokémon protected by Aurora Veil?": "这只宝可梦是否受极光幕保护？",
        "Is this Pokémon protected by Reflect and/or Light Screen?": "这只宝可梦是否受反射壁/光墙保护？",
        "Has this Pokémon's Weakness Policy been activated?": "这只宝可梦的弱点保险是否已触发？",
        "Has Tailwind been set?": "顺风是否生效？",
        "Has the opponent set up a sea of fire?": "对手一侧是否有火海？",
        "Has the opponent set up a swamp?": "对手一侧是否有湿地？",
        "Is G-Max Wildfire, Volcalith, Vine Lash, or Cannonade in effect?": "超极巨地狱灭焰弹/炎石喷发/灰飞鞭灭/水炮轰灭是否生效？",
        "Is this Pokémon protected by an ally's Friend Guard?": "这只宝可梦是否受队友友情防守保护？",
        "Is Stealth Rock affecting this side of the field?": "这一侧是否受到隐形岩影响？",
        "Are there Spikes on this side of the field?": "这一侧是否有撒菱？",
        "Does this Pokémon's ally have Flower Gift?": "这只宝可梦的队友是否有花之礼？",
        "Does this Pokémon's ally have Steely Spirit?": "这只宝可梦的队友是否有钢之意志？",
        "Is this Pokémon boosted by an ally's Power Spot?": "这只宝可梦是否受到队友能量点增强？",
        "Has this Pokémon's power been boosted by an ally's Battery?": "这只宝可梦是否受到队友蓄电池增强？",
        "Is this Pokémon affected by Salt Cure?": "这只宝可梦是否受到盐腌影响？",
        "Has this Pokémon used Geomancy?": "这只宝可梦是否使用过大地掌控？",
        "Has this Pokémon used Extreme Evoboost?": "这只宝可梦是否使用过九彩升华齐聚顶？",
        "Has this Pokémon eaten a Tatsugiri?": "这只宝可梦是否吃下米立龙？",
        "Is Charge active for this Pokémon?": "这只宝可梦是否处于充电状态？",
        "Has this Pokémon been revealed with Foresight or Odor Sleuth?": "这只宝可梦是否被识破/气味侦测识破？",
        "Remove custom modifier.": "删除自定义修正。",
        "Say, what's this?": "这是什么？"
    };

    const MOVE_CATEGORIES = {
        "Physical": "物理",
        "Special": "特殊",
        "Status": "变化"
    };

    const STAT_NAMES = {
        "Atk": "攻击",
        "Def": "防御",
        "SpA": "特攻",
        "SpD": "特防",
        "Spe": "速度"
    };

    const NATURE_EFFECTS = {
        "Adamant": ["Atk", "SpA"],
        "Bold": ["Def", "Atk"],
        "Brave": ["Atk", "Spe"],
        "Calm": ["SpD", "Atk"],
        "Careful": ["SpD", "SpA"],
        "Gentle": ["SpD", "Def"],
        "Hasty": ["Spe", "Def"],
        "Impish": ["Def", "SpA"],
        "Jolly": ["Spe", "SpA"],
        "Lax": ["Def", "SpD"],
        "Lonely": ["Atk", "Def"],
        "Mild": ["SpA", "Def"],
        "Modest": ["SpA", "Atk"],
        "Naive": ["Spe", "SpD"],
        "Naughty": ["Atk", "SpD"],
        "Quiet": ["SpA", "Spe"],
        "Rash": ["SpA", "SpD"],
        "Relaxed": ["Def", "Spe"],
        "Sassy": ["SpD", "Spe"],
        "Timid": ["Spe", "Atk"]
    };

    const RIVALRY_NAMES = {
        "": "关闭",
        "Same": "同性别",
        "Opposite": "异性别"
    };

    function callTranslator(name, value) {
        if (value == null || value === "") return value;
        if (typeof window[name] !== "function") return value;
        return window[name](value);
    }

    function textFromValue(value) {
        if (Object.prototype.hasOwnProperty.call(TEXT_MAP, value)) return TEXT_MAP[value];
        const field = callTranslator("translate_field", value);
        if (field !== value) return field;
        const type = callTranslator("translate_type", value);
        if (type !== value) return type;
        const move = callTranslator("translate_move", value);
        if (move !== value) return move;
        const ability = callTranslator("translate_ability", value);
        if (ability !== value) return ability;
        const item = callTranslator("translate_item", value);
        if (item !== value) return item;
        const pokemon = callTranslator("translate_pokemon", value);
        if (pokemon !== value) return pokemon;
        const nature = callTranslator("translate_nature", value);
        if (nature !== value) return nature;
        const ko = callTranslator("translate_ko_text", value);
        if (ko !== value) return ko;
        return value;
    }

    function natureText(value) {
        const translated = callTranslator("translate_nature", value);
        const effect = NATURE_EFFECTS[value];
        if (!effect) return translated;
        return translated + " (+" + STAT_NAMES[effect[0]] + ", -" + STAT_NAMES[effect[1]] + ")";
    }

    function replaceOwnText(node) {
        node.contents().filter(function () {
            return this.nodeType === 3;
        }).each(function () {
            const original = this.nodeValue.trim();
            if (!original) return;
            if (Object.prototype.hasOwnProperty.call(TEXT_MAP, original)) {
                this.nodeValue = this.nodeValue.replace(original, TEXT_MAP[original]);
            } else if (original.length > 2) {
                const translated = textFromValue(original);
                if (translated !== original) {
                    this.nodeValue = this.nodeValue.replace(original, translated);
                }
            }
        });
    }

    function localizeOptions(selector, resolver) {
        $(selector).find("option").each(function () {
            const value = $(this).val();
            const nextText = resolver(value, $(this).text());
            if (nextText != null && $(this).text() !== nextText) {
                $(this).text(nextText);
            }
        });
    }

    function localizeStructuredSelects() {
        localizeOptions("select.nature", function (value) {
            return natureText(value);
        });
        localizeOptions("select.status", function (value) {
            return STATUS_NAMES[value] || textFromValue(value);
        });
        localizeOptions("select.move-cat", function (value) {
            return MOVE_CATEGORIES[value] || textFromValue(value);
        });
        localizeOptions("select.ability-proto-quark", function (value) {
            return ["攻击", "防御", "特攻", "特防", "速度"][Number(value)] || value;
        });
        localizeOptions("select.ability-rivalry", function (value) {
            return RIVALRY_NAMES[value] || value;
        });
        localizeOptions("select.ability-supreme", function (value) {
            return value + " 只倒下";
        });
        localizeOptions("select.move-hits", function (value) {
            return value + " 次命中";
        });
        localizeOptions("select.move-linearAddedBP", function (value) {
            return value + " 次效果";
        });
        localizeOptions("select.move-opponent", function (value) {
            return "招式 " + value;
        });
    }

    function localizeFieldLabels() {
        $("label[for]").each(function () {
            const rawId = $(this).attr("for");
            const escapedId = $.escapeSelector ? $.escapeSelector(rawId) : rawId.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1");
            const target = $("#" + escapedId);
            if (!target.length) return;
            const value = target.val();
            if (target.is("input[type='radio'], input[type='checkbox']")) {
                const nextText = textFromValue(value);
                if (nextText && nextText !== value || Object.prototype.hasOwnProperty.call(TEXT_MAP, value)) {
                    $(this).text(nextText || TEXT_MAP[value]);
                }
            }
        });
    }

    function localizeTitleAttrs() {
        $("[title]").each(function () {
            const title = $(this).attr("title");
            if (!title) return;
            if (Object.prototype.hasOwnProperty.call(TITLE_MAP, title)) {
                $(this).attr("title", TITLE_MAP[title]);
                return;
            }
            if ($(this).hasClass("pkmnsc")) {
                $(this).attr("title", callTranslator("translate_pokemon", title));
            }
        });
    }

    function refreshSelect2(selectors) {
        $(selectors).each(function () {
            if ($(this).data("select2")) {
                $(this).trigger("change.select2");
            }
        });
    }

    function localizeStaticUi(opts) {
        opts = opts || {};
        $("label, button, option, th, td, h1, h2, h3, span, p").each(function () {
            replaceOwnText($(this));
        });

        localizeStructuredSelects();
        localizeFieldLabels();
        localizeTitleAttrs();

        $(".percent-hp").attr("title", "当前 HP 百分比");
        $(".current-hp").attr("title", "当前 HP");
        $(".tera").next("label").text("太晶化");
        $(".setCalc").each(function () {
            if ($(this).val() === "My Calc Set") {
                $(this).val("个人配置");
            }
        });

        /* Skip Select2 refresh when triggered by observer — it closes open dropdowns */
        if (!opts.skipSelect2) {
            refreshSelect2("select.nature, select.status, select.move-cat, select.type1, select.type2, select.tera-type, select.move-type, select.move-selector, select.ability, select.item");
        }
    }

    window.localizeStaticUi = localizeStaticUi;

    $(document).ready(function () { localizeStaticUi(); });
    $(document).on("change", "select.nature, select.status, select.move-cat, select.type1, select.type2, select.tera-type, select.move-type, select.move-selector, select.ability, select.item", function () {
        /* Select changed: full localization with Select2 refresh (dropdown already closed) */
        window.setTimeout(function () { localizeStaticUi(); }, 50);
    });
    $(document).on("click change mouseenter", "#switchTheme, #switchDex, .gen, .dex-change, .set-toggle, input[type='radio'], input[type='checkbox'], [title]", function () {
        /* Other interactions: text-only, no Select2 refresh to avoid UI jank */
        window.setTimeout(function () { localizeStaticUi({ skipSelect2: true }); }, 0);
        window.setTimeout(function () { localizeStaticUi({ skipSelect2: true }); }, 50);
    });

    /* MutationObserver catches dynamically inserted text (pokemon names, damage results, etc.).
       Disconnect → translate → reconnect avoids infinite loop.
       Debounced at 200ms and skips Select2 refresh to avoid closing open dropdowns. */
    var localizeObserver = new MutationObserver(function () {
        /* Don't localize while user is interacting with a select/Select2 dropdown */
        if (document.activeElement && document.activeElement.tagName === 'SELECT') return;
        if (document.querySelector('.select2-dropdown-open')) return;
        localizeObserver.disconnect();
        clearTimeout(localizeObserver._tid);
        localizeObserver._tid = window.setTimeout(function () {
            localizeStaticUi({ skipSelect2: true });
            localizeObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
        }, 200);
    });
    localizeObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
