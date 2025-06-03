import { ISnapshot, VOData } from '@workflow/type';

export const snapshotsToVOData = (snapshots: ISnapshot[]): VOData<ISnapshot>[] =>
  snapshots.map((snapshot) => {
    const { nodeID, inputs, outputs, data, branch } = snapshot;
    const newSnapshot: VOData<ISnapshot> = {
      nodeID,
      inputs,
      outputs,
      data,
    };
    if (branch) {
      newSnapshot.branch = branch;
    }
    return newSnapshot;
  });
