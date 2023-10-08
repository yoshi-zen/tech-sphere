/* 日時の設定 */
import {
  parseISO,
  format,
} from 'date-fns' /* parseISO で日時をパースし、format でyyyymmddにフォーマット */
import ja from 'date-fns/locale/ja' /* format のロカール設定で使用 */

export default function DateConvert({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy/MM/dd', {
        locale: ja,
      })}
    </time>
  )
}
