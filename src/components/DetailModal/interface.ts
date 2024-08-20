import { TableDataType } from "../HomeTable/interface";

export interface DetailModalProps {
    visible: boolean;
    data: TableDataType | null;
    onCancel: () => void;
  }