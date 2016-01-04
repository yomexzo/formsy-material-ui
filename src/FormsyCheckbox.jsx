const React = require('react');
const Formsy = require('formsy-react');
const Checkbox = require('material-ui/lib/checkbox');
const FormComponentMixin = require('./FormComponentMixin');

let FormsyCheckbox = React.createClass({
  mixins: [ Formsy.Mixin, FormComponentMixin ],

  componentDidMount: function () {
    this.setValue(this._checkbox.isChecked());
  },

  render: function () {
    return (
      <Checkbox
        {...this.props}
        ref={(c) => this._checkbox = c}
        onCheck={this.handleValueChange}
        checked={this.getValue()} />
    );
  }
});

module.exports = FormsyCheckbox;
