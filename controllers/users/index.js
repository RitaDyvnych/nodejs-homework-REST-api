import repositoryContacts from '../../repository/contacts'
import { HttpCode } from '../../libs/constants'
import { UploadFileService, LocalFileStorage, CloudFileStorage} from '../../service/file-storage'

const uploadAvatar = async (req, res, next) => {
  const uploadService = new UploadFileService(
    LocalFileStorage,
    req.file,
    req.user,
  )

  const avatarUrl = await uploadService.updateAvatar()

 res
    .status(HttpCode.OK)
   .json({ status: 'success', code: HttpCode.OK, data: {avatarUrl}})
}
  
export{uploadAvatar}