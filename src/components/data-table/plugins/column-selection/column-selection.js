export default {
  data () {
    return {
      columnSelection: this.columns.map(col => {
        return col.visible === false ? col.visible : col.field
      })
    }
  },
  watch: {
    'config.columnPicker' (value) {
      if (!value) {
        this.columnSelection = this.columns.map(col => col.field)
      }
      else {
        this.columnSelection = this.columns.map(col => {
          return col.visible === false ? col.visible : col.field
        })
      }
    }
  },
  computed: {
    cols () {
      return this.columns.filter(col => this.columnSelection.includes(col.field))
    },
    columnSelectionOptions () {
      return this.columns.map(col => {
        return {
          label: col.label,
          value: col.field
        }
      })
    }
  }
}
