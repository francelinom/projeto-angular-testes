import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name} should generate id when called with preix`, () => {
    const service = new UniqueIdService();
    const id = service.genereteUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.genereteUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});
