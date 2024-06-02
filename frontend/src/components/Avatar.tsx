import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

const Avatars = () => {
  return (
    <Avatar>
      <AvatarImage src="https://e7.pngegg.com/pngimages/363/657/png-clipart-computer-icons-chromatography-50x50-chromatogram-miscellaneous-text-thumbnail.png"></AvatarImage>
      <AvatarFallback>CN</AvatarFallback>

    </Avatar>

  )
}

export default Avatars