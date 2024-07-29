import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="p-8 flex flex-col items-center text-neutral-300">
      <div className="max-w-screen-md space-y-6">
        <div className="text-center">
          <Link href="/">Back</Link>
          <h1 className="text-6xl gradient-text font-black">Alice Kite</h1>
          <h4 className="text-xl">
            901-318-2467 &bull; alicefkite@gmail.com &bull;
            https://github.com/AliceKite
          </h4>
        </div>
        <div className="text-center">
          <h4 className="text-3xl font-bold">
            Proven Leadership &bull; Computer Science &bull; IT Technician
          </h4>
          <p className="text-lg text-start">
            Accomplished and motivated professional with years of experience and
            education in IT operations, technical assistance, critical thinking,
            innovative solutions, and multifaceted collaboration in fast-paced
            environments. Assist in defining vision, developing strategies, and
            driving continuous improvement. Career track includes contributions
            to high-performance work cultures with a demonstrated ability to
            partner throughout all levels of the organization.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Areas of Expertise</h4>
          <p className="text-lg">
            Team Collaboration &bull; Project Management &bull; Organizational
            Effectiveness &bull; Creative Problem Solving &bull; Detail-Oriented
            &bull; Strategic Planning &bull; Process Improvement &bull; Policy
            Implementation &bull; Front-End Development &bull; Data Analysis
            &bull; Machine Learning &bull; Software Troubleshooting &bull;
            Software Development &bull; Team Leadership &bull; Customer Service
            &bull;
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Experience</h4>
          <div className="space-y-8">
            <div className="text-start">
              <h4 className="text-lg font-bold">
                ESPORTS ENGINE
                <br />
                Online Admin III | 2021 - Present
              </h4>
              <ul className="text-lg list-disc list-inside">
                <li>
                  Drove 30+ high profile and visible projects from creation
                  through completion for Twitch, Epic, Nintendo, and Brawl
                  Stars.
                </li>
                <li>
                  Tracked and maintained all administration, including in-game
                  scores and handling of all support to ensure streamlined
                  operations.
                </li>
                <li>
                  Provided world class customer and client service in a
                  professional and courteous manner.
                </li>
                <li>
                  Utilized proven and demonstrated knowledge of the field to
                  maintain consistent communications through Discord, Twitch,
                  and Battlefy chats and support.
                </li>
                <li>
                  Worked with a talented and diverse team to implement processes
                  and processes as needed.
                </li>
              </ul>
            </div>
            <div className="text-start">
              <h4 className="text-lg font-bold">
                QubicaAMF Worldwide
                <br />
                Technical Support Technician | November 2023 - June 2024
              </h4>
              <ul className="text-lg list-disc list-inside">
                <li>
                  Worked in a team taking calls and emails related to scoring
                  and electromechanical issues that bowling centers faced.
                </li>
                <li>
                  Used Microsoft Sharepoint to open and work on new cases based
                  on calls and emails received.
                </li>
                <li>
                  Frequently remoted into centers using TeamViewer and UltraVNC
                  to assist with issues.
                </li>
                <li>
                  Assisted in acquisition and setting up of new equipment within
                  bowling centers across the world.
                </li>
                <li>
                  Managed Fortinet internet gateways to ensure my team had
                  direct access to centers’ network services.
                </li>
                <li>
                  Directly worked with cybersecurity division in ensuring our
                  team met with Coalfire compliance policies.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Projects</h4>
          <div className="space-y-8">
            <div className="text-start">
              <h4 className="text-lg font-bold">
                Personal Project
                <br />
                January 2024 - Ongoing
              </h4>
              <ul className="text-lg list-disc list-inside">
                <li>
                  Used Terraform and AWS to create cloud servers used as an
                  alternative framework for online gaming.
                </li>
                <li>
                  Created a solution for an online gaming community of 100+
                  players who were unable to play together previously.
                </li>
                <li>
                  Learned how to use Terraform from scratch to create all of my
                  resources using only existing documentation.
                </li>
                <li>
                  Experimented with different instance types and machine images
                  to optimize performance.
                </li>
                <li>
                  Currently in the process of creating modules to be able to
                  create resources within more than one region for optimal
                  latency between each individual player.
                </li>
                <li>
                  Made my code publicly available to be used by any community
                  without existing online frameworks for their game.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Education & Credentials</h4>
          <p className="text-lg">
            <b>UNIVERSITY OF MISSISSIPPI | August 2017 - May 2021 |</b> Bachelor
            in Multidisciplinary Studies – Computer Science, Japanese,
            International Studies
            <br />
            <b>TECHNOLOGY PROFILE|</b> HTML5 | CSS | JavaScript | Java | Linux |
            MySQL | Git | Python | Rust | AWS | Terraform
            <br />
            <b>CERTIFICATIONS|</b> AWS Cloud Practitioner
          </p>
        </div>
      </div>
    </div>
  );
}
