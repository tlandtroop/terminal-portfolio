import config from "@/config.json";

const sumfetch = async (): Promise<string> => {
  if (config.ascii === "tlandtroop") {
    return `

                _-o#&&*''''?d:>b\_
            _o/"\`''  '',, dMF9MMMMMHo_
        .o&#'       \`"MbHMMMMMMMMMMMHo.
      .o"" '         vodM*$&&HMMMMMMMMMM?.
      ,'             $M&ood,~'\`(&##MMMMMMH\                 sumfetch: summary display
    /               ,MMMMMMM#b?#bobMMMMHMMML              -----------
    &              ?MMMMMMMMMMMMMMMMM7MMM$R*Hk             ABOUT
  ?$.           :MMMMMMMMMMMMMMMMMMM/HMMM|\`*L              ${config.name}
  |               |MMMMMMMMMMMMMMMMMMMMbMH'   T,          ﰩ ${config.commandPromptHostname}
  $H#:          \`*MMMMMMMMMMMMMMMMMMMMb#}'   \`?            <u><a href="${config.commandPromptUsername}" target="_blank">resume</a></u>
  ]MMH#             ""*""""*#MMMMMMMMMMMMM'    -          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  MMMMMb_                   |MMMMMMMMMMMP'     :          -----------
  HMMMMMMMHo                \`MMMMMMMMMT       .            CONTACT
  ?MMMMMMMMP                  9MMMMMMMM}       -           <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  -?MMMMMMM                  |MMMMMMMMM?,d-    '           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  :|MMMMMM-                \`MMMMMMMT .M|.   :              <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    .9MMM[                    &MMMMM*'\`'    .
    :9MMk                   \`MMM#"        -
      &M}                    \`          .-
        \`&.                             .
          \`~,  .                     ./
              . _                  .-
                '\`--._,dd###pp=""'
                

`;
  }
  return "";
};

export default sumfetch;
