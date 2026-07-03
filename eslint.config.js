import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'ts/ban-ts-comment': 'off',
    'ts/no-redeclare': 'off',
  },
})
