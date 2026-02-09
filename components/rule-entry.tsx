"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { GameIcon } from "@/components/game-icon";
import { useLocale } from "@/components/providers/locale-provider";
import type { Rule } from "@/lib/types";

interface RuleEntryProps {
  rule: Rule;
  index: number;
  ruleId?: string;
  accentColor?: string;
}

export function RuleEntry({ rule, index, ruleId, accentColor }: RuleEntryProps) {
  const value = `rule-${index}`;
  const { t } = useLocale();

  return (
    <AccordionItem value={value} id={ruleId} className="border-b border-border/50 scroll-mt-20">
      <AccordionTrigger className="hover:no-underline py-3 px-1 gap-3">
        <div className="flex items-center gap-3 text-left min-w-0">
          <GameIcon
            name={rule.icon}
            size={26}
            color={accentColor}
            className="shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-base">{rule.title}</span>
              {rule.reference && (
                <Badge variant="outline" className="text-xs px-1.5 py-0 shrink-0">
                  {rule.reference}
                </Badge>
              )}
            </div>
            {rule.subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5 truncate">
                {rule.subtitle}
              </p>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-4 px-1">
        {rule.description ? (
          <div
            className="rule-description text-muted-foreground pl-[34px]"
            dangerouslySetInnerHTML={{ __html: rule.description }}
          />
        ) : (
          <p className="text-muted-foreground text-sm italic pl-[34px]">
            {t.noDescription}
          </p>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
