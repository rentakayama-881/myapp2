import { mapQueueStateToStatus } from './crawl-job.service';

describe('crawl-job.service queue state mapper', () => {
  it('maps queued states correctly', () => {
    expect(mapQueueStateToStatus('waiting')).toBe('queued');
    expect(mapQueueStateToStatus('delayed')).toBe('queued');
    expect(mapQueueStateToStatus('waiting-children')).toBe('queued');
    expect(mapQueueStateToStatus('unknown')).toBe('queued');
  });

  it('maps active state to running', () => {
    expect(mapQueueStateToStatus('active')).toBe('running');
  });

  it('maps completed and failed states', () => {
    expect(mapQueueStateToStatus('completed')).toBe('completed');
    expect(mapQueueStateToStatus('failed')).toBe('failed');
  });
});
