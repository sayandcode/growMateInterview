import { Circle, Defs, Image, Path, Pattern, Use } from 'react-native-svg';

const symbols = {
  toggle: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          scale={scale}
          fill={color}
          d="M3.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM11.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM18 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        />
      );
    },
  },
  share: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M.782 12.816c0-2.378.536-4.277 1.593-5.65C3.65 5.508 5.665 4.614 8.37 4.503V.672l7.85 6.68-7.85 6.679v-3.81c-1.642.045-2.882.282-3.87.737-1.066.492-1.84 1.226-2.674 2.178L.782 14.328v-1.512Z"
        />
      );
    },
  },
  arrowUp: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M6 0C4.8 0 1.833 5 .5 7.5l3.5 1v13h3l1-13s2-.5 3.5-.5c0-2-4-8-5.5-8Z"
        />
      );
    },
  },
  shareOutline: {
    size: 8,
    content(color, scale) {
      return (
        <Path
          d="M.5 7.5V5a2 2 0 0 1 2-2h4M5 1l2 2-2 2"
          scale={scale}
          stroke={color}
        />
      );
    },
  },
  idCard: {
    size: 18,
    content(color, scale) {
      return (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            scale={scale}
            d="M8.972.688a.5.5 0 0 1 .37.17l1.625 1.846h3.822a2.5 2.5 0 0 1 2.5 2.5V15.72a2.5 2.5 0 0 1-2.5 2.5H3.063a2.5 2.5 0 0 1-2.5-2.5V5.204a2.5 2.5 0 0 1 2.5-2.5h3.829L8.598.849a.5.5 0 0 1 .374-.161Zm-.014 1.247L7.479 3.542a.5.5 0 0 1-.368.162H3.063a1.5 1.5 0 0 0-1.5 1.5V15.72a1.5 1.5 0 0 0 1.446 1.499 4.533 4.533 0 0 1 4.506-4.032h2.42a4.533 4.533 0 0 1 4.504 4.033h.35a1.5 1.5 0 0 0 1.5-1.5V5.204a1.5 1.5 0 0 0-1.5-1.5h-4.048a.5.5 0 0 1-.376-.17L8.958 1.935Zm4.473 15.286a3.533 3.533 0 0 0-3.497-3.033h-2.42a3.533 3.533 0 0 0-3.497 3.033h9.414Zm-4.546-6.146a2.226 2.226 0 1 0 0-4.452 2.226 2.226 0 0 0 0 4.452Zm0 1a3.226 3.226 0 1 0 0-6.452 3.226 3.226 0 0 0 0 6.452Z"
            fill={color}
          />
          <Path
            scale={scale}
            d="m9.342.857.187-.165-.187.165Zm-.37-.17.003-.25-.003.25Zm1.995 2.017-.188.165.075.085h.113v-.25Zm-4.075 0v.25h.11l.074-.081-.184-.17ZM8.598.849l-.184-.17.184.17ZM7.48 3.542l.184.17-.184-.17Zm1.479-1.607.188-.165-.184-.209-.188.205.184.169ZM3.009 17.22l-.008.25.232.008.025-.23-.249-.028Zm11.43 0-.248.028.024.223h.224v-.25ZM10.365 3.535l-.188.165.188-.165Zm3.066 13.687v.25h.288l-.04-.285-.248.035Zm-9.414 0-.247-.035-.04.285h.287v-.25ZM9.53.692a.75.75 0 0 0-.554-.254l-.006.5a.25.25 0 0 1 .185.084l.375-.33Zm1.625 1.847L9.53.692l-.375.33 1.625 1.847.375-.33Zm3.635-.085h-3.822v.5h3.822v-.5Zm2.75 2.75a2.75 2.75 0 0 0-2.75-2.75v.5a2.25 2.25 0 0 1 2.25 2.25h.5Zm0 10.517V5.204h-.5V15.72h.5Zm-2.75 2.75a2.75 2.75 0 0 0 2.75-2.75h-.5a2.25 2.25 0 0 1-2.25 2.25v.5Zm-11.726 0h11.726v-.5H3.063v.5Zm-2.75-2.75a2.75 2.75 0 0 0 2.75 2.75v-.5a2.25 2.25 0 0 1-2.25-2.25h-.5Zm0-10.517V15.72h.5V5.204h-.5Zm2.75-2.75a2.75 2.75 0 0 0-2.75 2.75h.5a2.25 2.25 0 0 1 2.25-2.25v-.5Zm3.829 0h-3.83v.5h3.83v-.5ZM8.414.68 6.708 2.534l.368.339 1.706-1.855L8.414.68Zm.56-.242a.75.75 0 0 0-.56.242l.368.338a.25.25 0 0 1 .187-.08l.006-.5Zm-1.31 3.274 1.478-1.608-.368-.338-1.479 1.607.368.339Zm-.553.242a.75.75 0 0 0 .552-.242l-.368-.339a.25.25 0 0 1-.184.08v.5Zm-4.048 0H7.11v-.5H3.063v.5Zm-1.25 1.25c0-.69.56-1.25 1.25-1.25v-.5a1.75 1.75 0 0 0-1.75 1.75h.5Zm0 10.517V5.204h-.5V15.72h.5Zm1.205 1.249a1.25 1.25 0 0 1-1.205-1.25h-.5c0 .947.75 1.717 1.688 1.75l.017-.5Zm.24.277a4.283 4.283 0 0 1 4.257-3.809v-.5a4.783 4.783 0 0 0-4.754 4.255l.497.054Zm4.257-3.809h2.42v-.5h-2.42v.5Zm2.42 0a4.283 4.283 0 0 1 4.256 3.81l.497-.055a4.783 4.783 0 0 0-4.754-4.255v.5Zm4.854 3.533h-.35v.5h.35v-.5Zm1.25-1.25c0 .69-.56 1.25-1.25 1.25v.5a1.75 1.75 0 0 0 1.75-1.75h-.5Zm0-10.517V15.72h.5V5.204h-.5Zm-1.25-1.25c.69 0 1.25.56 1.25 1.25h.5a1.75 1.75 0 0 0-1.75-1.75v.5Zm-4.048 0h4.048v-.5h-4.048v.5Zm-.563-.255a.75.75 0 0 0 .563.255v-.5a.25.25 0 0 1-.188-.085l-.376.33ZM8.77 2.1l1.408 1.6.375-.331-1.407-1.6-.376.331Zm4.909 15.086a3.783 3.783 0 0 0-3.745-3.248v.5a3.283 3.283 0 0 1 3.25 2.818l.495-.07Zm-3.745-3.248h-2.42v.5h2.42v-.5Zm-2.42 0a3.783 3.783 0 0 0-3.744 3.248l.495.07a3.283 3.283 0 0 1 3.25-2.818v-.5Zm5.917 3.033H4.018v.5h9.415v-.5Zm-2.57-8.122a1.976 1.976 0 0 1-1.976 1.976v.5a2.476 2.476 0 0 0 2.476-2.476h-.5ZM8.886 6.873c1.092 0 1.976.885 1.976 1.976h.5a2.476 2.476 0 0 0-2.476-2.476v.5ZM6.91 8.849c0-1.091.885-1.976 1.976-1.976v-.5A2.476 2.476 0 0 0 6.41 8.849h.5Zm1.976 1.976A1.976 1.976 0 0 1 6.91 8.849h-.5a2.476 2.476 0 0 0 2.476 2.476v-.5Zm2.976-1.976a2.976 2.976 0 0 1-2.976 2.976v.5a3.476 3.476 0 0 0 3.476-3.476h-.5ZM8.886 5.873a2.976 2.976 0 0 1 2.976 2.976h.5a3.476 3.476 0 0 0-3.476-3.476v.5ZM5.91 8.849a2.976 2.976 0 0 1 2.976-2.976v-.5A3.476 3.476 0 0 0 5.41 8.849h.5Zm2.976 2.976A2.976 2.976 0 0 1 5.91 8.849h-.5a3.476 3.476 0 0 0 3.476 3.476v-.5Z"
            fill={color}
          />
        </>
      );
    },
  },
  chatBubble: {
    size: 18,
    content(color, scale) {
      return (
        <Path
          d="M7.9 15.766v.886l.758-.458c3.3-1.992 5.334-3.43 6.58-4.71.732-.752 1.156-1.417 1.407-2.074.252-.659.355-1.376.355-2.276 0-3.344-2.626-6.083-5.9-6.083H6.9C3.626 1.05 1 3.79 1 7.134s2.626 6.083 5.9 6.083h.9c.04 0 .1.038.1.12v2.43Zm-.5-1.498v-.5h-.5c-3.52 0-6.4-2.955-6.4-6.634C.5 3.454 3.381.5 6.9.5h4.2c3.52 0 6.4 2.954 6.4 6.634 0 .893-.096 1.652-.347 2.362-.25.707-.662 1.392-1.325 2.125-1.343 1.484-3.681 3.127-7.684 5.508-.197.118-.399.237-.605.358a.077.077 0 0 1-.042.013.085.085 0 0 1-.042-.013c-.03-.018-.055-.052-.055-.107v-3.112Z"
          fill={color}
          stroke={color}
          scale={scale}
        />
      );
    },
  },
  chevronUpDown: {
    size: 20,
    content(color, scale) {
      return (
        <Path
          d="M8.234 7.264a.375.375 0 0 0 .532-.528l-.89-.897c-.334-.338-.608-.615-.852-.81-.253-.204-.51-.352-.82-.391a1.614 1.614 0 0 0-.408 0c-.31.04-.567.187-.82.39-.244.196-.518.473-.853.81l-.89.898a.375.375 0 0 0 .533.528l.874-.882c.355-.357.599-.603.805-.769.201-.161.33-.216.446-.231a.864.864 0 0 1 .218 0c.116.015.245.07.446.231.206.166.45.412.805.77l.874.881ZM8.766 13.264a.375.375 0 0 0-.532-.528l-.874.881c-.355.358-.599.604-.805.77-.201.161-.33.216-.446.231a.868.868 0 0 1-.218 0c-.116-.015-.245-.07-.446-.231-.206-.166-.45-.412-.805-.77l-.874-.881a.375.375 0 0 0-.532.528l.89.897c.334.338.608.615.852.81.253.204.51.352.82.391.135.017.273.017.408 0 .31-.04.567-.187.82-.39.244-.196.518-.473.853-.81l.89-.898Z"
          fill={color}
          scale={scale}
        />
      );
    },
  },
  plusInCircle: {
    size: 12,
    content(color, scale) {
      return (
        <>
          <Circle
            cx={6}
            cy={6}
            r={5}
            scale={scale}
            stroke={color}
            strokeWidth={0.5}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6v3h.5V6H9v-.5H6.5V3H6v2.5H3V6h3Z"
            fill={color}
            scale={scale}
          />
        </>
      );
    },
  },
  closeFilledBlack: {
    size: 26,
    content(color, scale) {
      return (
        <>
          <Path scale={scale} fill="url(#a)" d="M0 0h26v26H0z" />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01)" />
            </Pattern>
            <Image
              id="b"
              width={100}
              height={100}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAZKADAAQAAAABAAAAZAAAAAAvu95BAAAKbUlEQVR4Ae2d+28VRRTHaQuIQsUir7YUi6L4VmKiRkRDiUq0glFITAzGFxI1PqPGX/wLNCqQiGJEo/4kqBEQiSjEVP1Bo0gUBaxKS0tpQKqVKo/S+jllVy+XXXdmd2bv3nYmmbu7szPnnPl+53F29nEHDXLBIeAQcAg4BBwCDgGHgEPAIeAQcAg4BBwCDoHsIFCSHVPCLRk3btzY0tLSqSUlJVPINaWnp2cKx2N7e3uHc1xBlK2ELmIH+bo41852O8dbidsos2n37t172M90yCQhVVVVJ4HaNYBaB6gz2J7PcVJbEdP7HfI2EjdA6PqWlpa/s8ZO0kqarE8pRFwBaPMReivxZJPCA2R1kvY+5KzYtWvXWvaPBORJPanghNTW1g47cODAXQDzOLWflDoCRxX+QkN4dsSIEcsbGxsPFsiGPrUFI0SGJcb1+xk6HgOMykKC4OumUbQJMWxfotf85aenuS0IIZBxIxVfTEVr06yshq4W7HsUJ2ClRhkjWVMlZPz48bX0iCVUtt6I9ZaFYOcq7H2Q3tJsWdW/4lMjhF5xExVcjmZxU4spdGL3AnrL22kYXWZbyeTJk08gPIee54kn2tZnQf4JzCnzysvLq+jh6/ft22fVG7PaQ6qrq0+lda0hXm4BqEKI/LysrGw21y/7bCm3RkhNTU3VkSNH1kHGBbaML5DcH+kx1zGv7LSh3wohzBdnQ8RHGFxjw+gMyGyGlGshZZtpW4wTMmHChGp6xucYepppYzMmrxV7prW1tTWZtKvUpDCZMyBjPTL7OxkCWzVxLQ1wlByYCsYIEW9KJnAMO8eUcUUg51wa4Gqpuylbjbm9w4YNWwQhN5syrIjk1Bw+fPjk/fv3rzNhs5E5BP98LpPcChMGFbGMW5hP3k1qf2JCvOWQb+kdI5MaU+Tlf8f+i5NO8ibmkMWOjL6mdAq/i5I2qkSEyPoUQ9WNSY3oR+XnyEp2kvrEHrJQfBI94weUDwQXVwfjX1leOS/u7eHYPYSbSw84MgJ5moQrvDDwjEJirB4ifjdu3i8MV1UKOgZcFnBpGzp06Ok7duw4oFv5WNchKFuIUnkQwWToRtgy5C5lKPya7Vkc23rQoRUdz3Lz6S10tBEvJsYeLSibH8rpJS002q/zT0Qdx+khpZWVlY0InhQlXPU84B8mbx2LdZ/5ZXj44ZRDhw69C3Az/DQTW3RtpEHdTOsVN7UvUJ/p7GwgDj6akvwXPT9TnzOR1KsjTbtVcN1xNQqMkSHGAvqruWRImgdYvQAoxyaCJ6s+lwyRy7VDA5vXTOjwZVCnMzyi/SSlrTYhSJ2vJFkjE0B9FZQdkuTJDyOk+GR4Mo9Tx/kvj0tMnqCNlRYh4upi+Nzkdh4rAY9twrEp/x2ZICWKDE9bqA3/WaO3h955rAZr3bbWIgRzriGW65kVnRvD75U5IyxnElJUyJg4cWIFjWJBmP646QxbI7u7u+t0ymsRggIt4RqGVB88eHDVmDFjRoSV8UnBhk/C8gSkN7ASOztsmJL80usBbSXEWXHh8eS0nBItQjBaS3gAQP+XNH3w4MFro0ihgrMVSWkA6Ov37NmzP0ypkMG51RYbmjgsM8P0B6WXBCUGpXmvBOzmnHKZIDlRaSpDjAekPM0S2EBMyIiyU+N8D/aMo5fuVSmj3ENomVMRaJUMMVhAJq6L6ilkrSdf0PClNExRXnpGIKFih8EgGMuFp1JQJgSW5WWZtELc4SsTw1Q+SDgMytgpE4ISZaH5BsU81iUlk2R4dVfGTpkQuresLaUdpg8ZMmSVN2cE6hYPSiZ6evAshQlc5p26QEEWE3VGF2VCsHe8RZtDRcs4T4ycU6JcWxSkNWccVxfsV8ZOhxDjF4THWR6eEDl8hRVNw7UN0+2n00OUsSsWQqRu2qRkgQyPFCuEhF5F+y0hha0yKRkiQ2CxQkgKeJtVgbupdS/CrPZ40nSGrNAliHiqY5WKdG19qb73xYQadPHoZ0tr+6eqIh1ClIWqKtfMp0yGLzdDpChjVyyEaJORJVLopVYIkYXF1AMuo3wKI/KiT/Hi0djtYB0gsF8ZO+UeglD5kEvaQWehMPLiEePDFiSt1oseovymlTIhWKws1FDtIoepPNc20iUu4JyijJ0yITosGyBElwxfZSZJYa3NCiHfUGvrfr3qnIEtYQuFOguSacwpcoNqk99iorbKPUQ+/oXg76MEJjyvM2eE3lyiNystSGJrGnPK5tbW1t9UcVEmRARSUXm6z1aIO0yF2ZOJ4YtGrIWZFiG6wsOQCkhv5fMbsy3cz1Aavni0dB6NbVeAXYmTWL6xRwjWfUyUL7EZDYDxcv7jnbkKPG8q9KGG3Lz5+zJ8kbbm/65TmpubO5h4X8kva+D4d16GtUeIuI1UcKUBQ48RARjyEn5gSEKGL1CFFPK2+PkNblfQ0LReSdAasjxD3zRocJ8oALs0SKYJMny5UaSE2eCXj7nVxirOYz3yOsJPGHh6TCODinWTWOc9hd53Xh7v5EG3dzwgg8rESmMeTOV1BOxuxDOV5xC0LhXiEDKIVxLuo2IvxkIkvJCQshy58hR6DfFeKlUZnj3+GeTKBL5Mhkr2pXfeSTT2bohn2UIa2DJvX3kTixD3Slskvi3Dhw+fHOcLp2WRogMyyFfV+KQqjbnk2oDTAz4JXJ5uamr6Ig4QcSb1Pj1096Xs7IijtD+XgYyfua7RHqp8TGIT4rnA9/uC3PYoAlwIPqzr6uZiF5sQEYIX8SGT4qpcgQN8/z0w+SAJBokIEcUMXQ+y+feN1iTGFHlZ+VeGh5PWITEhDF3NdNP5GKLlbyc1PGPlpe53g8XOpHbF8rLylXZ1dW3nu7byqbvL8s8NkOMXuOZI/CUgwSpxD/EBx+9+kv1Yrp4vo0i3DaNGjXrKlO2xLgzDlFdUVIxkdfNTzl8UlqefpW/hyz9XmfywsrEeIkB3dHT8gYE3sNvUz4APqk4Lk/j1JskQJUYJEYEY2Iqh17HbLMf9NDTjXc4Uh8Z0/YwOWbnGjR49upLXnNdBzoW56f1g/wfqNMuERxWEhfEe4ivZu3dvG4TM4Lg/TfQNvGJ3pS0yBDsjbq9PQv62s7Pzb74Z9QYLkfKXD9M4b61H5us2fCzXGUvwpuazgit/zWctpAYQd//msMzyGjUpxj90uYclkVS+S2xtyMpvQnTz90mbWmRrX+/Rs89PiwzBLLUekksQn+mox0tZTNqk3PQM7cvf6D2UdKEwTn1S6yG5xrW3t6+RT6mS9igx9ImT3DIp7cuTJ4/wjNh5hSBD6liQHpILrtwOZi3sDoaGJ2iVZ+SeS2sfvY3of4ZJ+/UtW7YcSktvkJ6CE5JrFE+zXMLx7cTbiKfmnjO9DwF/yHzG9g3mN3kPMROr1ZkixAedr8vJ37HOBKyZpM0gysVl0uG1BxmbiRsh4hN5ojDJnT3kWAmZJCS/prjMo0mbyn2Xs9ieDVHyMZexRHn/Wz4N6L9DL28Ky80yeaevHeDlra+tOBDbKLNJ5yl0yrngEHAIOAQcAg4Bh4BDwCHgEHAIOAQcAg4Bh8CAR+AfT9N5QwF9yXcAAAAASUVORK5CYII="
            />
          </Defs>
        </>
      );
    },
  },
};

export default symbols;
