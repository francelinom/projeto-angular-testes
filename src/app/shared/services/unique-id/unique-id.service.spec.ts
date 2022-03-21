import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  it('#genereteUniqueIdWithPrefix should generate id when called with preix', () => {
    const service = new UniqueIdService();
    const id = service.genereteUniqueIdWithPrefix('app');

    expect(id).toContain('app-');
  });
});
