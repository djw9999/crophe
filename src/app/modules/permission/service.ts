import { Service } from 'typedi';
import { getRepository, FindConditions } from 'typeorm';
import { PermissionEntity } from './entity';

import { objectUtils } from '@/utils';

@Service()
export class PermissionEntityService {
    private PermissionEntityRepository = getRepository(PermissionEntity);

    async getPermission(conditions: FindConditions<PermissionEntity>) {
        return this.PermissionEntityRepository.find(objectUtils.clean({ ...conditions }))
    }
}