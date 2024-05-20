import { useEffect, useMemo } from 'react';

// import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();
  const isRolePermissions = useSelector((state) => state.rolepermission.isRolePermissions);
  // const data = useMemo(
  //   () => [
  //     // OVERVIEW
  //     // ----------------------------------------------------------------------
  //     {
  //       subheader: t(''),
  //       items: [
  //         {
  //           title: t('dashboard'),
  //           path: paths.dashboard.root,
  //           icon: ICONS.dashboard,
  //         },
  //       ],
  //     },
  //      {
  //       // subheader: t(''),
  //       items: [
  //         // USER
  //         {
  //           title: t('Admin Managements'),
  //           path: paths.dashboard.user.root,
  //           icon: ICONS.user,
  //           children: [
  //             { title: t('Modules'), path: paths.dashboard.user.root },
  //             { title: t('Sub Modules'), path: paths.dashboard.user.cards },
  //             { title: t('Role Permission'), path: paths.dashboard.user.list },
  //           ],
  //         },
  //       ]
  //      },
  //     ],[t]
  //   )
  const data = useMemo(() => {
    if (!isRolePermissions || !isRolePermissions.modules) return [];

    const navItems = [];

    isRolePermissions.modules.forEach((module) => {
        const module_route = !module.module_route && module.sub_modules ? module?.module_title.replace(/\s+/g, "-").toLowerCase() : module.module_route
        const path = (module.module_route === "dashboard") ? `/${module.module_route}` : `${paths.dashboard.root}/${module_route}`
        const item = {
          items: [
            {
              title: t(module.module_title),
              path: path,
              icon: module.module_icon ? icon(module.module_icon) : null,
            },
          ],
        };
  
        if (module.sub_modules && module.module_route != "dashboard") {
          const sub_module_path = `${paths.dashboard.root}/${module?.module_title.replace(/\s+/g, "-").toLowerCase()}`;
          item.items[0].children = [];
          module.sub_modules.forEach((subModule) => {
            item.items[0].children.push({
              title: t(subModule.sub_module_title),
              path: `${sub_module_path}/${subModule.sub_module_route}`,
            });
          });
        }
      navItems.push(item);
    });
    return navItems;
  }, [isRolePermissions, t]);

  return data;
}
