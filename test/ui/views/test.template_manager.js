describe('M.TemplateManager', function() {

    var uiTemplates = ['defaultTemplate', 'bootstrap', 'topcoat', 'jqm'];
    var TEST_TEMPLATE = '<div></div>';

    var ALL_M_VIEWS = _.filter(Object.keys(M.TemplateManager), function( value, key ) {
        return (value.indexOf('M.') >= 0);
    });

    var TEMPLATE_VIEW_NAME = 'M.TemplateForTestPurposes';

    it('General', function() {

        assert.isDefined(M.TemplateManager);
        assert.isObject(M.TemplateManager);
        assert.isTrue(M.Object.isPrototypeOf(M.TemplateManager));
        assert.isDefined(M.TemplateManager._currentUI);
        assert.isString(M.TemplateManager._currentUI);
        var currentUI = _.find(uiTemplates, function( value ) {
            return value === M.TemplateManager._currentUI
        });
        assert.isTrue(M.TemplateManager._currentUI === currentUI);
    });

    it('View templates', function() {

        for( var view in ALL_M_VIEWS ) {
            for( var template in uiTemplates ) {
                var viewTemplate = M.TemplateManager.get(ALL_M_VIEWS[view], uiTemplates[template]);
                assert.isString(viewTemplate);
                assert.isTrue(viewTemplate.indexOf('<') === 0);
            }
        }

    });

    it('defaultTheme is defined for every view', function() {

        for( var view in ALL_M_VIEWS ) {
            for( var template in uiTemplates ) {
                assert.isDefined(M.TemplateManager[ALL_M_VIEWS[view]]['defaultTemplate']);
            }
        }

    });

    describe('Get Function', function() {

        var testForSpecificTheme = function( theme ) {
            M.TemplateManager[TEMPLATE_VIEW_NAME] = {};
            M.TemplateManager[TEMPLATE_VIEW_NAME][theme] = TEST_TEMPLATE;


            M.TemplateManager._currentUI = 'defaultTemplate';
            assert.isUndefined(M.TemplateManager.get(TEMPLATE_VIEW_NAME));
            assert.isDefined(M.TemplateManager.get(TEMPLATE_VIEW_NAME, theme));
            M.TemplateManager._currentUI = theme;
            assert.isDefined(M.TemplateManager.get(TEMPLATE_VIEW_NAME));
        };

        var testForSpecificThemeWithOwnTemplate = function(theme){
            M.TemplateManager._currentUI = theme
            M.TemplateManager[TEMPLATE_VIEW_NAME] = {
                defaultTemplate: TEST_TEMPLATE
            };
            assert.isDefined(M.TemplateManager[TEMPLATE_VIEW_NAME]);
            M.TemplateManager[TEMPLATE_VIEW_NAME][theme] = TEST_TEMPLATE + theme;
            assert.isTrue(M.TemplateManager.get(TEMPLATE_VIEW_NAME) === TEST_TEMPLATE + theme);
            assert.isTrue(M.TemplateManager.get(TEMPLATE_VIEW_NAME, theme) === TEST_TEMPLATE + theme);
        }

        it('templates are accessable', function() {

            var testTemplate = function( view ) {
                for( var template in uiTemplates ) {
                    var viewTemplate = M.TemplateManager.get(view, uiTemplates[template]);
                    assert.isTrue(viewTemplate === TEST_TEMPLATE);
                }
            };

            assert.isUndefined(M.TemplateManager[TEMPLATE_VIEW_NAME]);
            M.TemplateManager[TEMPLATE_VIEW_NAME] = {
                defaultTemplate: TEST_TEMPLATE
            };
            testTemplate(TEMPLATE_VIEW_NAME);

        });


        it('test a pseudoTheme', function() {
            testForSpecificTheme('pseudoTheme');
        });

        it('test for specific theme', function() {
            for( var view in ALL_M_VIEWS ) {
                testForSpecificTheme(ALL_M_VIEWS[view]);
            }
        });

        it('test for specific theme with own template', function() {
            for( var view in ALL_M_VIEWS ) {
                testForSpecificThemeWithOwnTemplate(ALL_M_VIEWS[view]);
            }
        });

        it('get a not defined template', function() {
            assert.isTrue(M.TemplateManager.get('IamNotDefined') === M.TemplateManager.get('M.View'));
        });

        after(function() {
            delete M.TemplateManager[TEMPLATE_VIEW_NAME];
            assert.isUndefined(M.TemplateManager[TEMPLATE_VIEW_NAME]);
        });

    });

    it('Templates for every view should be equal to this one', function(){

        var templates = {
            'M.View': {
                defaultTemplate: '<div><%= _value %></div>'
            },

            'M.TextView': {
                defaultTemplate: '<div><% if(label) {  %><div class="label"><%= label %></div><% } %><div><% if(icon) {  %><div class="input-icon-addon"><i class="fa <%= icon %> fa-fw"></i><% } %><%= _value %></div>'
            },

            'M.ButtonView': {
                defaultTemplate: '<div class="button"><% if(icon) { %> <i class="fa <%= icon %>"></i> <% } %> <div data-binding="_value"<% if(_value) {  } %>><%= _value %></div></div>'
            },

            'M.ToolbarView': {
                defaultTemplate: '<div><div data-childviews="first"></div> <div class="center" data-binding="_value"><%= _value %></div> <div data-childviews="second"></div></div>'
            },


            //TODO implement label for=""
            'M.TextfieldView': {
                defaultTemplate: '<div><% if(label) {  %><label><%= label %><% } %><div class="<% if(icon) {  %> input-icon-addon<% } %>"><% if(icon) {  %><i class="fa <%= icon %> fa-fw"></i><% } %><input type="<%= type %>" <% if(placeholder) { %> placeholder="<%= placeholder %>"<% } %> value="<%= _value %>"></div><% if(label) {  %></label><% } %></div>'
            },

            'M.TextareaView': {
                defaultTemplate: '<div><% if(label) {  %><label><%= label %><% } %><textarea><%= _value %></textarea><% if(label) {  %></label><% } %></div>'
            },

            'M.ButtonGroupView': {
                defaultTemplate: '<div class="clearfix" data-childviews="buttons"></div>'
            },

            'M.SearchfieldView': {
                defaultTemplate: '<div contenteditable="true"><%= _value %></div>'
            },

            'M.ListView': {
                defaultTemplate: '<ul data-childviews="list"></ul>'
            },

            'M.ListItemView': {
                defaultTemplate: '<li><%= _value %></li>'
            },

            'M.ModelView': {
                defaultTemplate: '<ul><%= _value %></ul>'
            },

            'M.LabelView': {
                defaultTemplate: '<div contenteditable="true"><%= _value %></div>'
            },

            'M.DebugView': {
                defaultTemplate: '<div><div data-childviews="debug-menu"></div><div data-childviews="debug-grid"></div></div>'
            },

            'M.AccordionView': {
                defaultTemplate: '<ul><%= _value %></ul>'
            },

            'M.AccordionItemView': {
                defaultTemplate: '<ul><%= _value %></ul>'
            },

            'M.SliderView': {
                defaultTemplate: '<input type="range">'
            },

            'M.ToggleView': {
                defaultTemplate: '<div><div data-childviews="first"></div><div data-childviews="second"></div></div>'
            },

            'M.ImageView': {
                defaultTemplate: '<img src="<%= _value %>" alt="<%= alt %>" />'
            },

            'M.LoaderView': {
                defaultTemplate: '<div class="m-view m-overlayview m-loaderview m-loaderview-show" style="display: block;"> <div class="m-view m-overlayview-inner m-loaderview-inner"> <div class="m-view m-labelview m-loaderview-inner-message"></div> <div class="m-view m-loaderview-inner-icon m-loaderview-inner-icon-only"> <div class="m-view m-loaderview-inner-icon-1"></div> <div class="m-view m-loaderview-inner-icon-2"></div> <div class="m-view m-loaderview-inner-icon-3"></div> <div class="m-view m-loaderview-inner-icon-4"></div> <div class="m-view m-loaderview-inner-icon-5"></div> <div class="m-view m-loaderview-inner-icon-6"></div> <div class="m-view m-loaderview-inner-icon-7"></div> <div class="m-view m-loaderview-inner-icon-8"></div> </div> </div> </div>'
            },

            'M.DialogView': {
                defaultTemplate: '<div></div>'
            },

            'M.SelectView': {
                defaultTemplate: '<div class="selection-list<% if(isMultiple){ %> multiple<% } %>"><select<% if(isMultiple){ %> multiple<% } %>><%= _value %></select></div>'
            },

            'M.RadiolistView': {
                defaultTemplate: '<div><%= label %><div data-childviews="radio-options"></div></div>'
            },

            'M.RadioOptionView': {
                defaultTemplate: '<label><input type="radio" name="<%= name %>" value="<%= _value %>"><i class="needsclick fa"></i><%= label %></label>'
            },

            'M.CheckboxlistView': {
                defaultTemplate: '<div><%= label %><div data-childviews="checkbox-options"></div></div>'
            },

            'M.CheckboxOptionView': {
                defaultTemplate: '<label><input type="checkbox" name="<%= name %>" value="<%= _value %>"><i class="needsclick fa"></i> <%= label %></label>'
            },

            'M.ToggleSwitchView': {
                defaultTemplate: '<div><label><% if(label){%> <span class="needsclick label-descr"> <%= label %> <% }%> </span> <div class="toggleswitch"><input value="<%= _value %>" type="checkbox"><span class="switch-labels needsclick" data-onLabel="<%= onLabel %>" data-offLabel="<%= offLabel %>">switchlabel<span class="switch-handle"></span></span></div></label></div>'
            },

            'M.MenuView': {
                defaultTemplate: '<div class="movable-backdrop fade"></div><div class="movable-container"><span><%= _value %></span><div class="menu-content" data-childviews="menu-content"></div></div>'
            },

            'M.ModalView': {
                defaultTemplate: '<div data-childviews="content"><div>'
            }
        }


        _.each(templates, function(template, name){
            var templateFromTemplateManager = M.TemplateManager.get(name)
            assert.equal(templateFromTemplateManager, template.defaultTemplate, 'template for ' + name + ' is not as expectedf' );
        });


    });


});
