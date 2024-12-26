require.config({
  paths: {
    fontawesome: 'vendor/fontawesome/js/fontawesome.min',
    'fontawesome/solid': 'vendor/fontawesome/js/solid.min',
    'fontawesome/brands': 'vendor/fontawesome/js/brands.min'
    // Pro files can be added like this:
    // 'fontawesome/regular': 'vendor/fontawesome/regular.min',
    // 'fontawesome/light': 'vendor/fontawesome/light.min',
    // 'fontawesome/thin': 'vendor/fontawesome/thin.min',
    // 'fontawesome/duotone': 'vendor/fontawesome/duotone.min'
    // 'fontawesome/duotone-regular': 'vendor/fontawesome/duotone-regular.min'
    // 'fontawesome/duotone-light': 'vendor/fontawesome/duotone-light.min'
    // 'fontawesome/duotone-thin': 'vendor/fontawesome/duotone-thin.min'
    // 'fontawesome/sharp-solid': 'vendor/fontawesome/sharp-solid.min'
    // 'fontawesome/sharp-regular': 'vendor/fontawesome/sharp-regular.min'
    // 'fontawesome/sharp-light': 'vendor/fontawesome/sharp-light.min'
    // 'fontawesome/sharp-thin': 'vendor/fontawesome/sharp-thin.min'
    // 'fontawesome/sharp-duotone-solid': 'vendor/fontawesome/sharp-duotone-solid.min'
    // 'fontawesome/sharp-duotone-regular': 'vendor/fontawesome/sharp-duotone-regular.min'
    // 'fontawesome/sharp-duotone-light': 'vendor/fontawesome/sharp-duotone-light.min'
    // 'fontawesome/sharp-duotone-thin': 'vendor/fontawesome/sharp-duotone-thin.min'
  },
  shim: {
    fontawesome: {
      deps: ['fontawesome/solid', 'fontawesome/brands']
    }
  }
})

require(['fontawesome'], function (fontawesome) {
  console.log('Congrats, Font Awesome is installed using Require.js')
})