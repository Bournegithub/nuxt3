import { E as ElContainer, b as ElHeader, c as ElAside, a as ElMain } from './el-main-39c4e088.mjs';
import __nuxt_component_2 from './AppHeader-1274c171.mjs';
import __nuxt_component_4 from './AppSider-1adfa6e1.mjs';
import { mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './base-6516e288.mjs';
import '@vue/shared';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'is-https';
import 'pinia-plugin-persistedstate';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_container = ElContainer;
  const _component_el_header = ElHeader;
  const _component_app_header = __nuxt_component_2;
  const _component_el_aside = ElAside;
  const _component_app_sider = __nuxt_component_4;
  const _component_el_main = ElMain;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "common-layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_el_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_app_header, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_app_header)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_container, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_aside, { width: "200px" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_app_sider, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_app_sider)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_main, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_aside, { width: "200px" }, {
                  default: withCtx(() => [
                    createVNode(_component_app_sider)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_main, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_header, null, {
            default: withCtx(() => [
              createVNode(_component_app_header)
            ]),
            _: 1
          }),
          createVNode(_component_el_container, null, {
            default: withCtx(() => [
              createVNode(_component_el_aside, { width: "200px" }, {
                default: withCtx(() => [
                  createVNode(_component_app_sider)
                ]),
                _: 1
              }),
              createVNode(_component_el_main, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-b8640815.mjs.map
