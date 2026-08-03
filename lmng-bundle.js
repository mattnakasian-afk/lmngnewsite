/* @ds-bundle: {"format":4,"namespace":"LMNGDesignSystem_e6bdbd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a58e6047b874","components/core/Button.jsx":"737576cf5fea","components/core/IconButton.jsx":"c3c488a30dfa","components/core/Tag.jsx":"dc04f391232f","components/feedback/Toast.jsx":"cdce506d11c2","components/feedback/Tooltip.jsx":"6e965e2bd261","components/forms/Checkbox.jsx":"0539d59346f0","components/forms/Input.jsx":"6b59d2b335e5","components/forms/Radio.jsx":"e07a9878b15a","components/forms/Select.jsx":"52b465a8726f","components/forms/Switch.jsx":"088604d79f88","components/surfaces/Card.jsx":"fec47fe3467f","components/surfaces/Dialog.jsx":"580008850f1e","components/surfaces/Tabs.jsx":"959fef5014b8","ui_kits/intranet/DashboardHome.jsx":"badadadea20b","ui_kits/intranet/MatterDetail.jsx":"473d0872c6ba","ui_kits/intranet/Sidebar.jsx":"8c059e219b7b","ui_kits/intranet/TopBar.jsx":"3e6953c9e5a4","ui_kits/intranet/data.js":"5f10719d3b62","ui_kits/marketing-site/AttorneyBios.jsx":"3be9b6fd63f9","ui_kits/marketing-site/ContactSection.jsx":"a0fdc0ebede6","ui_kits/marketing-site/Footer.jsx":"385360000d7a","ui_kits/marketing-site/Header.jsx":"76ae892115f7","ui_kits/marketing-site/Hero.jsx":"7ff63ef22e66","ui_kits/marketing-site/MarketingTopBar.jsx":"81c0bf18f4aa","ui_kits/marketing-site/PracticeAreas.jsx":"f09c7e633ea2","ui_kits/marketing-site/ValueProps.jsx":"bdc1f68b3d46","ui_kits/marketing-site/image-slot.js":"fff26d081c8d","ui_kits/shared/Icon.jsx":"c77e262d44dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LMNGDesignSystem_e6bdbd = window.LMNGDesignSystem_e6bdbd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneMap = {
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--ink-700)'
  },
  navy: {
    bg: 'var(--navy-900)',
    fg: 'var(--paper-0)'
  },
  brass: {
    bg: 'var(--brass-100)',
    fg: 'var(--brass-700)'
  },
  success: {
    bg: '#e4f1ec',
    fg: 'var(--status-success)'
  },
  error: {
    bg: '#f6e6e6',
    fg: 'var(--status-error)'
  },
  warning: {
    bg: '#f7ecd8',
    fg: 'var(--status-warning)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const t = toneMap[tone] || toneMap.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '10px 20px',
    fontSize: 'var(--text-body)'
  },
  lg: {
    padding: '14px 28px',
    fontSize: 'var(--text-body-lg)'
  }
};
const variantStyles = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--fg-inverse)',
    border: '1px solid var(--accent-primary)'
  },
  secondary: {
    background: 'var(--paper-0)',
    color: 'var(--fg-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--fg-primary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--paper-0)',
    color: 'var(--ink-900)',
    border: '1px solid var(--paper-0)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variantStyles[variant] || variantStyles.primary;
  let background = v.background;
  if (!disabled && hover) {
    if (variant === 'primary') background = 'var(--accent-primary-hover)';else if (variant === 'secondary') background = 'var(--ink-100)';else if (variant === 'ghost') background = 'var(--ink-100)';else if (variant === 'inverse') background = 'var(--paper-100)';
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      whiteSpace: 'nowrap',
      ...sizeStyles[size],
      ...v,
      background
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  onClick,
  disabled
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const bg = variant === 'filled' ? 'var(--accent-primary)' : hover ? 'var(--ink-100)' : 'transparent';
  const color = variant === 'filled' ? 'var(--fg-inverse)' : 'var(--fg-primary)';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-md)',
      border: variant === 'outline' ? '1px solid var(--border-default)' : 'none',
      background: bg,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-primary)',
      padding: '4px 10px 4px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--paper-50)',
      border: '1px solid var(--border-default)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--fg-secondary)',
      fontSize: '14px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneMap = {
  default: {
    bg: 'var(--ink-900)',
    fg: 'var(--paper-0)'
  },
  success: {
    bg: 'var(--status-success)',
    fg: 'var(--paper-0)'
  },
  error: {
    bg: 'var(--status-error)',
    fg: 'var(--paper-0)'
  }
};
function Toast({
  children,
  tone = 'default',
  onClose
}) {
  const t = toneMap[tone] || toneMap.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: t.bg,
      color: t.fg,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      minWidth: '260px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-900)',
      color: 'var(--paper-0)',
      fontSize: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent-primary)' : 'var(--paper-0)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  helpText,
  disabled
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--status-error)' : focused ? 'var(--border-strong)' : 'var(--border-default)'}`,
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      background: disabled ? 'var(--paper-50)' : 'var(--paper-0)',
      color: 'var(--fg-primary)',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }), (helpText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-error)' : 'var(--fg-secondary)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--fg-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: disabled ? 'var(--paper-50)' : 'var(--paper-0)',
      color: 'var(--fg-primary)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--ink-200)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--paper-0)',
      transition: 'left var(--duration-fast) var(--ease-standard)',
      boxShadow: 'var(--shadow-xs)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'md'
}) {
  const pad = {
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[padding];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      padding: pad
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(14,14,16,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--paper-0)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: '440px',
      maxWidth: '90vw',
      padding: 'var(--space-8)',
      fontFamily: 'var(--font-body)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h3)',
      marginBottom: 'var(--space-4)',
      color: 'var(--fg-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-primary)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => onChange(t.value),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 2px',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      color: active === t.value ? 'var(--fg-primary)' : 'var(--fg-secondary)',
      borderBottom: active === t.value ? '2px solid var(--accent-primary)' : '2px solid transparent',
      marginBottom: '-1px',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/DashboardHome.jsx
try { (() => {
window.statusTone = s => ({
  Active: 'success',
  Pending: 'warning',
  Overdue: 'error'
})[s] || 'neutral';
window.DashboardHome = function DashboardHome({
  onOpenMatter
}) {
  const {
    Card,
    Badge
  } = window.LMNGDesignSystem_e6bdbd;
  const stats = [['Active matters', '18', 'briefcase'], ['Pending review', '4', 'clock'], ['Overdue', '2', 'alert-triangle'], ['Hours logged (mo)', '312', 'timer']];
  return React.createElement('div', {
    style: {
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, stats.map(([label, value, icon]) => React.createElement(Card, {
    key: label,
    padding: 'md'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, label), React.createElement(window.Icon, {
    name: icon,
    size: 16,
    color: 'var(--fg-muted)'
  })), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--fg-primary)',
      marginTop: '8px'
    }
  }, value)))), React.createElement(Card, {
    padding: 'lg'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)'
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 0
    }
  }, 'Recent matters')), React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, ['Matter', 'Client', 'Attorney', 'Area', 'Status', 'Updated'].map(h => React.createElement('th', {
    key: h,
    style: {
      textAlign: 'left',
      fontSize: 'var(--text-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--fg-muted)',
      fontWeight: 'var(--weight-semibold)',
      padding: '8px 12px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, h)))), React.createElement('tbody', null, window.MATTERS.map(m => React.createElement('tr', {
    key: m.id,
    onClick: () => onOpenMatter(m),
    style: {
      cursor: 'pointer'
    }
  }, React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-primary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, m.name), React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, m.client), React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, m.attorney), React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, m.area), React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement(Badge, {
    tone: window.statusTone(m.status)
  }, m.status)), React.createElement('td', {
    style: {
      padding: '12px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, m.updated)))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/DashboardHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/MatterDetail.jsx
try { (() => {
window.MatterDetail = function MatterDetail({
  matter,
  onBack
}) {
  const {
    Card,
    Badge,
    Tabs,
    Tag,
    Button
  } = window.LMNGDesignSystem_e6bdbd;
  const [tab, setTab] = React.useState('overview');
  const docs = ['Engagement Letter.pdf', 'Term Sheet — Draft 3.docx', 'Cap Table.xlsx'];
  return React.createElement('div', {
    style: {
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, React.createElement('a', {
    onClick: onBack,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-link)',
      cursor: 'pointer'
    }
  }, '← Back to matters'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 0
    }
  }, matter.name), React.createElement(Badge, {
    tone: window.statusTone(matter.status)
  }, matter.status)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, React.createElement(Tag, null, matter.area), React.createElement(Tag, null, matter.attorney)), React.createElement(Card, {
    padding: 'lg'
  }, React.createElement(Tabs, {
    tabs: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'docs',
      label: 'Documents'
    }, {
      value: 'billing',
      label: 'Billing'
    }],
    active: tab,
    onChange: setTab
  }), React.createElement('div', {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, tab === 'overview' && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, `Client: ${matter.client}. Matter ID ${matter.id}. Last updated ${matter.updated}.`), tab === 'docs' && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, docs.map(d => React.createElement('div', {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement(window.Icon, {
    name: 'file-text',
    size: 16,
    color: 'var(--fg-muted)'
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-primary)'
    }
  }, d))), React.createElement(Button, {
    variant: 'secondary',
    size: 'sm',
    style: {
      alignSelf: 'flex-start',
      marginTop: '8px'
    }
  }, 'Upload document')), tab === 'billing' && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, 'No billing entries yet.'))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/MatterDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/Sidebar.jsx
try { (() => {
window.Sidebar = function Sidebar({
  view,
  onNav
}) {
  const items = [['dashboard', 'layout-dashboard', 'Dashboard'], ['matters', 'briefcase', 'Matters'], ['documents', 'folder', 'Documents'], ['billing', 'receipt', 'Billing'], ['settings', 'settings', 'Settings']];
  return React.createElement('div', {
    style: {
      width: '232px',
      flexShrink: 0,
      background: 'var(--ink-900)',
      height: '100vh',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-6) var(--space-4)'
    }
  }, React.createElement('img', {
    src: 'logo-square.png',
    style: {
      height: '36px',
      filter: 'invert(1)',
      margin: '0 0 var(--space-8) var(--space-2)'
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, items.map(([key, icon, label]) => React.createElement('div', {
    key,
    onClick: () => onNav(key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      background: view === key ? 'rgba(255,255,255,0.1)' : 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: view === key ? 'var(--paper-0)' : 'var(--ink-300)'
    }
  }, React.createElement(window.Icon, {
    name: icon,
    size: 18,
    color: view === key ? 'var(--paper-0)' : 'var(--ink-300)'
  }), label))), React.createElement('div', {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 12px'
    }
  }, React.createElement('div', {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--navy-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '13px'
    }
  }, 'DL'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--paper-0)'
    }
  }, 'Diane Lape')));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/TopBar.jsx
try { (() => {
window.TopBar = function TopBar({
  title
}) {
  const {
    IconButton,
    Button
  } = window.LMNGDesignSystem_e6bdbd;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-6) var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--paper-0)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 0
    }
  }, title), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }
  }, React.createElement(IconButton, {
    'aria-label': 'Search',
    variant: 'outline'
  }, React.createElement(window.Icon, {
    name: 'search',
    size: 16
  })), React.createElement(IconButton, {
    'aria-label': 'Notifications',
    variant: 'outline'
  }, React.createElement(window.Icon, {
    name: 'bell',
    size: 16
  })), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, '+ New matter')));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/data.js
try { (() => {
window.MATTERS = [{
  id: 'M-2201',
  name: 'Acme Corp — Series C Financing',
  client: 'Acme Corp',
  attorney: 'Diane Lape',
  status: 'Active',
  area: 'Corporate',
  updated: 'Jul 29'
}, {
  id: 'M-2187',
  name: 'Bristow v. Halden Logistics',
  client: 'Bristow Family Trust',
  attorney: 'Robert Mansfield',
  status: 'Active',
  area: 'Litigation',
  updated: 'Jul 28'
}, {
  id: 'M-2144',
  name: 'Meridian Foods Regulatory Review',
  client: 'Meridian Foods',
  attorney: 'Sona Nakasian',
  status: 'Pending',
  area: 'Regulatory',
  updated: 'Jul 25'
}, {
  id: 'M-2098',
  name: '4th & Main Office Lease',
  client: 'Kestrel Holdings',
  attorney: 'Marcus Gibson',
  status: 'Overdue',
  area: 'Real Estate',
  updated: 'Jul 12'
}, {
  id: 'M-2071',
  name: 'Halvorsen Estate Litigation',
  client: 'Halvorsen Family',
  attorney: 'Robert Mansfield',
  status: 'Active',
  area: 'Litigation',
  updated: 'Jul 30'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/data.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/AttorneyBios.jsx
try { (() => {
window.ATTORNEYS = [{
  name: 'Diane Lape',
  title: 'Founding Partner',
  focus: 'Corporate'
}, {
  name: 'Robert Mansfield',
  title: 'Founding Partner',
  focus: 'Litigation'
}, {
  name: 'Sona Nakasian',
  title: 'Partner',
  focus: 'Regulatory'
}, {
  name: 'Marcus Gibson',
  title: 'Partner',
  focus: 'Real Estate'
}];
window.AttorneyBios = function AttorneyBios() {
  const {
    Card,
    Badge
  } = window.LMNGDesignSystem_e6bdbd;
  return React.createElement('section', {
    id: 'attorneys',
    style: {
      padding: 'var(--space-24) var(--container-pad)',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-secondary-hover)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, 'Our people'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 'var(--space-2) 0 var(--space-10)'
    }
  }, 'Attorneys'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, window.ATTORNEYS.map(p => React.createElement(Card, {
    key: p.name,
    padding: 'md'
  }, React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      color: 'var(--ink-500)',
      marginBottom: 'var(--space-4)'
    }
  }, p.name.split(' ').map(n => n[0]).join('')), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--fg-primary)'
    }
  }, p.name), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)',
      margin: '2px 0 10px'
    }
  }, p.title), React.createElement(Badge, {
    tone: 'neutral'
  }, p.focus))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/AttorneyBios.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactSection.jsx
try { (() => {
window.ContactSection = function ContactSection() {
  const {
    Input,
    Select,
    Checkbox,
    Button
  } = window.LMNGDesignSystem_e6bdbd;
  const [sent, setSent] = React.useState(false);
  return React.createElement('section', {
    id: 'contact',
    style: {
      padding: 'var(--space-24) var(--container-pad)',
      background: 'var(--paper-0)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, React.createElement('div', null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-secondary-hover)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, 'Get in touch'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 'var(--space-2) 0 var(--space-4)'
    }
  }, 'Schedule a consultation'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--fg-secondary)',
      maxWidth: '440px'
    }
  }, "Tell us about your matter and a member of our team will follow up within one business day.")), sent ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--status-success)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "Thank you — we'll be in touch shortly.") : React.createElement('form', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, React.createElement(Input, {
    label: 'Full name',
    placeholder: 'Jane Doe'
  }), React.createElement(Input, {
    label: 'Email',
    placeholder: 'you@company.com',
    type: 'email'
  }), React.createElement(Select, {
    label: 'Practice area',
    value: 'corp',
    onChange: () => {},
    options: window.PRACTICE_AREAS.map(a => ({
      value: a.name,
      label: a.name
    }))
  }), React.createElement(Checkbox, {
    label: 'I agree to be contacted about my matter',
    checked: true,
    onChange: () => {}
  }), React.createElement(Button, {
    type: 'submit',
    variant: 'primary',
    size: 'lg'
  }, 'Submit'))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
window.Footer = function Footer() {
  return React.createElement('footer', {
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--space-16) var(--container-pad) var(--space-8)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-10)'
    }
  }, React.createElement('img', {
    src: 'logo-square.png',
    alt: 'LMNG',
    style: {
      height: '36px',
      filter: 'invert(1)'
    }
  }), ['Practice Areas', 'Attorneys', 'Careers', 'Contact'].map((col, i) => React.createElement('div', {
    key: col,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, col), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-200)'
    }
  }, 'Link')))), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-10) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--ink-700)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-300)'
    }
  }, '© 2026 Lape Mansfield Nakasian & Gibson, LLC. Attorneys at Law.'));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
window.Header = function Header({
  page,
  onNav
}) {
  const {
    Button
  } = window.LMNGDesignSystem_e6bdbd;
  const links = [['home', 'Home'], ['practice', 'Practice Areas'], ['attorneys', 'Attorneys'], ['contact', 'Contact']];
  return React.createElement('header', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--paper-0)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('img', {
    src: 'logo-square.png',
    alt: 'LMNG',
    style: {
      height: '40px',
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: '32px'
    }
  }, links.map(([key, label]) => React.createElement('a', {
    key,
    onClick: () => onNav(key),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)',
      color: page === key ? 'var(--fg-primary)' : 'var(--fg-secondary)',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: page === key ? '2px solid var(--accent-primary)' : '2px solid transparent',
      paddingBottom: '4px'
    }
  }, label))), React.createElement(Button, {
    variant: 'primary',
    size: 'sm',
    onClick: () => onNav('contact')
  }, 'Schedule a consultation')));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
window.Hero = function Hero({
  onCta
}) {
  const {
    Button
  } = window.LMNGDesignSystem_e6bdbd;
  return React.createElement('section', {
    style: {
      position: 'relative',
      minHeight: '640px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, React.createElement('image-slot', {
    id: 'hero-photo',
    shape: 'rect',
    placeholder: 'Drop attorney or office photography',
    style: {
      width: '100%',
      height: '100%'
    }
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(100deg, rgba(14,14,16,0.88) 0%, rgba(14,14,16,0.66) 45%, rgba(14,14,16,0.30) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-max)',
      width: '100%',
      margin: '0 auto',
      padding: 'var(--space-24) var(--container-pad)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: '640px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--brass-300)',
      fontWeight: 'var(--weight-semibold)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--brass-700)',
      display: 'inline-block',
      width: 'fit-content'
    }
  }, 'Litigation & Corporate Law'), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-1)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--paper-0)',
      margin: 0
    }
  }, 'A Legacy of Trust Built on Sophisticated Legal Excellence.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--ink-200)',
      margin: 0,
      maxWidth: '520px'
    }
  }, "We represent clients across litigation, corporate transactions, and regulatory matters — with the responsiveness of a boutique firm and the depth of a national one."), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, React.createElement(Button, {
    variant: 'inverse',
    size: 'lg',
    onClick: onCta
  }, 'Schedule a consultation'), React.createElement(Button, {
    variant: 'ghost',
    size: 'lg',
    onClick: onCta,
    style: {
      color: 'var(--paper-0)',
      border: '1px solid var(--ink-300)'
    }
  }, 'View case results')))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/MarketingTopBar.jsx
try { (() => {
window.MarketingTopBar = function MarketingTopBar() {
  const social = ['facebook', 'linkedin', 'twitter', 'instagram'];
  const item = (icon, text) => React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, React.createElement(window.Icon, {
    name: icon,
    size: 14,
    color: 'var(--brass-300)'
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-200)'
    }
  }, text));
  return React.createElement('div', {
    style: {
      background: 'var(--ink-900)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '10px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, item('calendar', 'Monday – Friday: 9 AM – 6 PM'), item('map-pin', '1701 Market Street, Philadelphia, PA')), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, item('mail', 'contact@lmnglaw.com'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, social.map(s => React.createElement(window.Icon, {
    key: s,
    name: s,
    size: 14,
    color: 'var(--ink-200)'
  }))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/MarketingTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PracticeAreas.jsx
try { (() => {
window.PRACTICE_AREAS = [{
  icon: 'gavel',
  name: 'Litigation & Disputes',
  desc: 'Complex commercial litigation, arbitration, and dispute resolution.'
}, {
  icon: 'building-2',
  name: 'Corporate & Transactions',
  desc: 'M&A, financing, governance, and general counsel services.'
}, {
  icon: 'scale',
  name: 'Regulatory & Compliance',
  desc: 'Navigating federal and state regulatory frameworks.'
}, {
  icon: 'home',
  name: 'Real Estate',
  desc: 'Acquisitions, leasing, development, and land use.'
}, {
  icon: 'shield-check',
  name: 'Employment Law',
  desc: 'Workplace policy, disputes, and executive agreements.'
}, {
  icon: 'file-text',
  name: 'Intellectual Property',
  desc: 'Patents, trademarks, licensing, and IP litigation.'
}];
window.PracticeAreas = function PracticeAreas({
  onSelect
}) {
  const {
    Card
  } = window.LMNGDesignSystem_e6bdbd;
  return React.createElement('section', {
    id: 'practice',
    style: {
      padding: 'var(--space-24) var(--container-pad)',
      background: 'var(--paper-0)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-secondary-hover)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, 'What we do'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 'var(--space-2) 0 var(--space-10)'
    }
  }, 'Practice Areas'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, window.PRACTICE_AREAS.map(a => React.createElement('div', {
    key: a.name,
    onClick: () => onSelect && onSelect(a),
    style: {
      cursor: 'pointer'
    }
  }, React.createElement(Card, {
    padding: 'lg'
  }, React.createElement(window.Icon, {
    name: a.icon,
    size: 28,
    color: 'var(--accent-primary)'
  }), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, a.name), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, a.desc)))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PracticeAreas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ValueProps.jsx
try { (() => {
window.VALUE_PROPS = [{
  icon: 'target',
  title: 'Business-first approach',
  desc: 'We align every legal strategy with your broader business goals to ensure practical, measurable impact.'
}, {
  icon: 'globe',
  title: 'Multi-jurisdictional reach',
  desc: 'Our attorneys operate across state and federal systems, guiding clients through complex matters with confidence.'
}, {
  icon: 'trending-up',
  title: 'Proven track record',
  desc: 'Decades of favorable outcomes across litigation and transactional work for clients large and small.'
}, {
  icon: 'shield-check',
  title: 'Trusted counsel',
  desc: 'Businesses and individuals rely on us as long-term advisors for their most consequential decisions.'
}];
window.ValueProps = function ValueProps() {
  return React.createElement('section', {
    style: {
      padding: 'var(--space-16) var(--container-pad) var(--space-20)',
      background: 'var(--paper-0)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: '0 0 var(--space-10)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, 'Our value, your advantage'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, window.VALUE_PROPS.map(v => React.createElement('div', {
    key: v.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, React.createElement(window.Icon, {
    name: v.icon,
    size: 22,
    color: 'var(--accent-primary)'
  }), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--fg-primary)',
      margin: 0
    }
  }, v.title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--fg-secondary)',
      margin: 0
    }
  }, v.desc))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ValueProps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/shared/Icon.jsx
try { (() => {
window.Icon = function Icon({
  name,
  size = 20,
  color = 'currentColor'
}) {
  const url = `https://unpkg.com/lucide-static@0.462.0/icons/${name}.svg`;
  return React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      flexShrink: 0
    }
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/Icon.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
