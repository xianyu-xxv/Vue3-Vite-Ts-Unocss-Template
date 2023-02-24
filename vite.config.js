import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
      rules: [ // 在这个可以增加预设规则, 也可以使用正则表达式
        [
          'p-c', // 使用时只需要写 p-c 即可应用该组样式
          {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`
          }
        ],
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
      ]
    })
  ]
})

