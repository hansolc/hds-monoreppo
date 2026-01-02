/**
 * @Anaytomy
 * <Select>
 *  <Select.Trigger>
 *    <Select.Value placeholder="select option" />
 *    <Select.Icon />
 *  </Select.Trigger>
 *  <Select.Portal>
 *        <Select.Group>
 *          <Select.Label>option group 1</Select.Label>
 *          <Select.Item value="1">
 *            option 1
 *          </Select.Item>
 *        </Select.Group>
 *  </Select.Portal>
 * </Select>
 *
 */
import { SelectGroup } from "./Select";
import { SelectTrigger } from "./SelectTrigger";
import { SelectValue } from "./SelectValue";
import { SelectIcon } from "./SelectIcon";
import { SelectPortal } from "./SelectPortal";
import { SelectContent } from "./SelectContent";
import { SelectItem } from "./SelectItem";

export const Select = Object.assign(SelectGroup, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Content: SelectContent,
  Item: SelectItem,
});

export {
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectItem,
};
