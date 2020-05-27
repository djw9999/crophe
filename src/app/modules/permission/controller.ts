import {
    Get,
    QueryParam,
    Controller,
    UseBefore,
    Ctx
  } from 'routing-controllers';
  import { IContext } from '@/interface';
  import { FormatResponse } from '@/app/middlewares/formatResponse';

  import { PermissionEntityService } from './service';

  const ADMIN = 'Admin';
  const USER = 'User';

  @Controller('/api/crophe')
  @UseBefore(FormatResponse)
  export class PermissionController {
      constructor(private permissionService: PermissionEntityService) {}

      @Get('/permissionList')
      async getArticleList(
        @Ctx() ctx: IContext,
        @QueryParam('s_tp') s_tp: string,
        @QueryParam('s_user') s_user: string,
        @QueryParam('s_img_data') s_img_data: string,
      ) {
          const { role } = ctx.session;
          const query = role === ADMIN ? {s_tp, s_user, s_img_data} : {s_authorize: USER, s_tp, s_user, s_img_data};

          const permissionList = await this.permissionService.getPermission(query);
          return permissionList;

      }
 }