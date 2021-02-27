// eslint-disable-next-line import/no-unresolved
import filenamify from 'filenamify/browser'
import imageExtensions from 'image-extensions'
import { FunctionComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import { StatusForm } from '../../common/components/status-form'
import { useReleaseInfo } from '../../common/hooks/use-release-info'
import { ResolveData } from '../../common/services'
import { download } from '../../common/utils/download'
import { isComplete } from '../../common/utils/one-shot'
import { isDefined } from '../../common/utils/types'
import styles from '../styles/app.module.css'

const getFilename = ({ coverArt, title, artists }: ResolveData) => {
  let filename = ''
  if (isDefined(artists)) {
    filename += artists.join(', ')
  }
  if (isDefined(title)) {
    if (isDefined(artists)) {
      filename += ' - '
    }
    filename += title
  }
  if (filename.length === 0) {
    filename = 'cover'
  }
  const extension = coverArt?.split('.').pop()
  if (isDefined(extension) && imageExtensions.includes(extension)) {
    filename += `.${extension}`
  }
  return filenamify(filename)
}

export const App: FunctionComponent = () => {
  const { info, fetchInfo } = useReleaseInfo()

  useEffect(() => {
    if (isComplete(info)) {
      const { coverArt } = info.data
      if (isDefined(coverArt)) {
        void download({ url: coverArt, filename: getFilename(info.data) })
      }
    }
  }, [info])

  return (
    <>
      <h4>Download Cover Art</h4>
      <div className={styles.container}>
        <StatusForm submitText='Download' data={info} onSubmit={fetchInfo} />
      </div>
    </>
  )
}